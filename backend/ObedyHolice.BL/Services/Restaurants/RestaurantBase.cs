
using ObedyHolice.BL.Interfaces;

namespace ObedyHolice.BL.Services.Restaurants
{
    public abstract class RestaurantBase : IRestaurant
    {
        protected readonly Dictionary<string, DayOfWeek> daysCsToEn = new(StringComparer.OrdinalIgnoreCase)
        {
            { "Pondělí", DayOfWeek.Monday },
            { "Úterý", DayOfWeek.Tuesday },
            { "Středa", DayOfWeek.Wednesday },
            { "Čtvrtek", DayOfWeek.Thursday },
            { "Pátek", DayOfWeek.Friday },
            { "Sobota", DayOfWeek.Saturday },
            { "Neděle", DayOfWeek.Sunday }
        };

        public abstract string Name { get; }

        public abstract string SubTitle { get; }

        public abstract Task<List<string>> GetMenuItems();
    }
}
