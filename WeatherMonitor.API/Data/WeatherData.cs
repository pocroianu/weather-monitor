using Microsoft.EntityFrameworkCore;
using WeatherMonitor.API.Models;

namespace WeatherMonitor.API.Data {
    public class WeatherData : DbContext {
        public WeatherData (DbContextOptions<WeatherData> options) : base (options) { }

        public DbSet<ConditionsModel> WeatherForecasts { get; set; }

        public DbSet<LocationModel> LocationModels{get; set;}

    }
}