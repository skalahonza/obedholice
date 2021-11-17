using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;
using Microsoft.Azure.Cosmos.Table;
using Microsoft.Azure.Cosmos.Table.Queryable;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;

using ObedyHolice.API.Entities;
using ObedyHolice.BL.Interfaces;

namespace ObedyHolice.API
{
    public record Restaurant
        (
            string Name,
            string SubTitle,
            List<string> MenuItems
        );

    public class Restaurants
    {
        private readonly IEnumerable<IRestaurant> _restaurants;

        public Restaurants(IEnumerable<IRestaurant> restaurants)
        {
            _restaurants = restaurants;
        }


        /// <summary>
        /// Return lists of restaurants with their menus.
        /// </summary>
        /// <param name="req"></param>
        /// <param name="log"></param>
        /// <returns></returns>
        [FunctionName(nameof(ListRestaurants))]
        [OpenApiOperation(operationId: nameof(ListRestaurants), tags: "restaurants", Summary = "Get list of restaurants.")]
        [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "application/json", bodyType: typeof(List<Restaurant>), Description = "List of restaurants.")]
        public async Task<List<Restaurant>> ListRestaurants(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "restaurants")] HttpRequest req,
            [Table("Restaurants")] CloudTable table,
            ILogger log)
        {
            var today = DateTime.Now.ToString("yyyy-MM-dd");
            var query = table.CreateQuery<RestaurantEntity>().Where(x => x.PartitionKey == today).AsTableQuery();
            var data = await table.ExecuteQuerySegmentedAsync(query, default);
            return data.Select(x => x.ToRecord()).ToList();
        }

        /// <summary>
        /// Periodically refresh menus
        /// </summary>
        /// <returns></returns>
        [FunctionName(nameof(MenuRefresher))]
        public async Task MenuRefresher([TimerTrigger("0 0 * * * *"
#if DEBUG
            , RunOnStartup = true
#endif
            )] TimerInfo myTimer,
            [Table("Restaurants")] CloudTable table,
            ILogger log)
        {
            foreach (var restaurant in _restaurants)
            {
                try
                {
                    log.LogInformation($"Fetching {restaurant.Name} menu.");
                    var menu = await restaurant.GetMenuItems();
                    foreach (var item in menu)
                    {
                        log.LogInformation(item);
                    }

                    log.LogInformation($"Persisting {restaurant.Name} menu.");

                    var oepration = TableOperation.InsertOrReplace(new RestaurantEntity(restaurant.Name, restaurant.SubTitle, menu));
                    await table.ExecuteAsync(oepration);

                    log.LogInformation($"Persisted {restaurant.Name} menu.");
                }
                catch (Exception ex)
                {
                    log.LogError(ex, $"Error when persisting {restaurant.Name} menu.");
                }
            }
        }
    }
}

