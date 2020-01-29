using Microsoft.EntityFrameworkCore;

namespace WeatherMonitor.API.Data {
    public class WeatherData : DbContext {
        public WeatherData (DbContextOptions<WeatherData> options) : base (options) { }

        public DbSet<WeatherForecastModel> WeatherForecasts { get; set; }

    }
}