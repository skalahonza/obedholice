using HtmlAgilityPack;

using System.Web;

namespace ObedyHolice.BL.Services.Restaurants
{
    public class CoronaHolice : RestaurantBase
    {
        public override string Name => "Corona";

        public override string SubTitle => "Mexická kuchyně";

        public override string Website => "https://icorona37.wixsite.com/site01/tdenni";

        public override async Task<List<string>> GetMenuItems()
        {
            var web = new HtmlWeb();
            var doc = await web.LoadFromWebAsync(Website);

            var menu = doc.DocumentNode
                .SelectNodes("//div")
                .FirstOrDefault(x => x.GetAttributeValue<string>("id", string.Empty) == "i3lajmgf_0");

            if (menu is null)
                return new List<string>();

            var rows = menu
                .Descendants()
                .Select(x => x.InnerText ?? string.Empty)
                .Distinct()
                .Select(x => HttpUtility.HtmlDecode(x)?.Trim() ?? string.Empty)
                .Where(x => !string.IsNullOrEmpty(x))
                .ToList();

            return ParseTodayMenu(rows);
        }

        private List<string> ParseTodayMenu(IEnumerable<string> menuRows)
        {
            var dayilyMenus = new Dictionary<DayOfWeek, List<string>>();
            DayOfWeek? day = null;

            var enumerator = menuRows.GetEnumerator();
            while (enumerator.MoveNext())
            {
                var line = enumerator.Current;

                // line contains day name
                if (daysCsToEn.ContainsKey(line))
                {
                    day = daysCsToEn[line];
                    dayilyMenus[day.Value] = new List<string>();
                }
                // termination line
                else if (line.Contains("alergen", StringComparison.OrdinalIgnoreCase))
                {
                    break;
                }
                // menu item
                else if (day.HasValue)
                {
                    dayilyMenus[day.Value].Add(line);
                }
            }

            return MenuForToday(dayilyMenus);
        }
    }
}
