using Microsoft.Azure.Functions.Extensions.DependencyInjection;

using ObedyHolice.API;
using ObedyHolice.BL.Interfaces;
using ObedyHolice.BL.Services.Restaurants;
using Microsoft.Extensions.DependencyInjection;

[assembly: FunctionsStartup(typeof(Startup))]
namespace ObedyHolice.API
{
    public class Startup : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
#if DEBUG
            builder.Services.AddSingleton<IRestaurant, DummyRestaurant>();
#endif
            builder.Services.AddSingleton<IRestaurant, CoronaHolice>();
            builder.Services.AddSingleton<IRestaurant, QuickPoint>();
        }
    }
}
