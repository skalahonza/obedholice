
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

        public abstract string Website { get; }

        public abstract Task<List<string>> GetMenuItems();

        protected static List<string> MenuForToday(Dictionary<DayOfWeek, List<string>> dayilyMenus)
        {
            var today = DateTime.Now.DayOfWeek;
            if (dayilyMenus.TryGetValue(today, out var menu))
            {
                return menu;
            }
            else
            {
                return new List<string>();
            }
        }
    }
}
