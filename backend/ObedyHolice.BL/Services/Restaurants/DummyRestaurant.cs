using ObedyHolice.BL.Interfaces;

namespace ObedyHolice.BL.Services.Restaurants
{
    public class DummyRestaurant : IRestaurant
    {
        public string Name => "Dummy";

        public string SubTitle => "Only for reference implementation";

        public Task<List<string>> GetMenuItems() =>
            Task.FromResult(new List<string>
            {
             "Polévka",
            "Hlavní jídlo 1",
            "Hlavní jídlo 2",
            "Hlavní jídlo 3"
            });
    }
}
