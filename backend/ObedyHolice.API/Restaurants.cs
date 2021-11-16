using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;

namespace ObedyHolice.API
{
    public record Restaurant
        (
            string Name,
            string SubTitle,
            List<string> MenuItems
        );

    public static class Restaurants
    {
        /// <summary>
        /// Return lists of restaurants with their menus.
        /// </summary>
        /// <param name="req"></param>
        /// <param name="log"></param>
        /// <returns></returns>
        [FunctionName(nameof(ListRestaurants))]
        [OpenApiOperation(operationId: nameof(ListRestaurants), tags: "restaurants", Summary = "Get list of restaurants.")]
        [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "application/json", bodyType: typeof(List<Restaurant>), Description = "List of restaurants.")]
        public static async Task<List<Restaurant>> ListRestaurants(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "restaurants")] HttpRequest req,
            ILogger log)
        {
            return Enumerable
                .Range(1, 5)
                .Select(i => new Restaurant
                (
                    $"Restaurant {i}",
                    "Polední menu",
                    new List<string>
                    {
                     "Polévka",
                    "Hlavní jídlo 1",
                    "Hlavní jídlo 2",
                    "Hlavní jídlo 3"
                    }
                ))
                .ToList();
        }
    }
}

