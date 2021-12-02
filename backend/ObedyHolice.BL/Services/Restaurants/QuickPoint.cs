using HtmlAgilityPack;

using System.Net;
using System.Text;

using UglyToad.PdfPig;
using UglyToad.PdfPig.Content;

namespace ObedyHolice.BL.Services.Restaurants
{
    public class QuickPoint : RestaurantBase
    {

        public override string Name => "Quickpoint Restaurant";

        public override string SubTitle => "Nachází se v 1. patře Hotelu Erwin Junker";

        public override string Website => "https://hoteljunker.cz/restaurant";

        public override async Task<List<string>> GetMenuItems()
        {
            var web = new HtmlWeb();
            var doc = await web.LoadFromWebAsync(Website);

            var pdfLink = doc.DocumentNode
                .SelectNodes("//a")
                .FirstOrDefault(x =>
                {
                    var href = x.GetAttributeValue<string>("href", string.Empty);
                    return href.EndsWith("pdf") && x.InnerText.Contains("poledni", StringComparison.OrdinalIgnoreCase);
                })
                ?.GetAttributeValue<string>("href", string.Empty);

            if (string.IsNullOrWhiteSpace(pdfLink))
            {
                return new List<string>();
            }

            var uri = new UriBuilder(Website)
            {
                Path = pdfLink
            }.Uri;

            using var wc = new WebClient();
            var stream = await wc.DownloadDataTaskAsync(uri);
            using var pdf = PdfDocument.Open(stream);
            var menu = new List<string>();

            foreach (var page in pdf.GetPages().Take(1))
            {
                menu = ParseMenu(page.GetWords());
                var words = page.GetWords().ToList();
            }

            return menu;
        }

        /// <summary>
        /// Try to save a menu for a current day.
        /// </summary>
        private void TrySaveDay(DayOfWeek? day, StringBuilder menuLine, Dictionary<DayOfWeek, List<string>> dayilyMenus)
        {
            if (day.HasValue)
            {
                dayilyMenus[day.Value].Add(menuLine.ToString());
                menuLine.Clear(); 
            }
        }

        private List<string> ParseMenu(IEnumerable<Word> words)
        {
            const string MENU_ITEM_TERMINATOR = ",-";
            var today = DateTime.Now.DayOfWeek;
            var dayilyMenus = new Dictionary<DayOfWeek, List<string>>();

            DayOfWeek? day = null;
            var menuLine = new StringBuilder();

            foreach (var word in words.Select(x => x.Text))
            {
                // word contains day name
                if (daysCsToEn.ContainsKey(word))
                {
                    TrySaveDay(day, menuLine, dayilyMenus);
                    day = daysCsToEn[word];
                    dayilyMenus[day.Value] = new List<string>();
                }

                // menu item price
                else if (word.EndsWith(MENU_ITEM_TERMINATOR))
                {
                    if (day.HasValue)
                    {
                        menuLine.Append(' ');
                        menuLine.Append(word);
                        TrySaveDay(day, menuLine, dayilyMenus);
                    }
                }

                // menu item word
                else if (day.HasValue)
                {
                    menuLine.Append(' ');
                    menuLine.Append(word);
                }

                // stop word
                else if(word.Equals("speciality", StringComparison.OrdinalIgnoreCase))
                {
                    break;
                }
            }

            return MenuForToday(dayilyMenus);
        }
    }
}
