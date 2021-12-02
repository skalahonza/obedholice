namespace ObedyHolice.BL.Services.Restaurants
{
    public class DummyRestaurant : RestaurantBase
    {
        public override string Name => "Dummy";

        public override string SubTitle => "Only for reference implementation";

        public override string Website => "https://localhost";

        public override Task<List<string>> GetMenuItems() =>
            Task.FromResult(new List<string>
            {
             "Polévka",
            "Hlavní jídlo 1",
            "Hlavní jídlo 2",
            "Hlavní jídlo 3"
            });
    }
}
