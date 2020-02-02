using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WeatherMonitor.API.Data;

namespace WeatherMonitor.API.Controllers {
    [ApiController]
    [Route ("[controller]")]
    public class WeatherForecastController : ControllerBase {
        private readonly WeatherData _context;
        public WeatherForecastController (WeatherData context) {
            _context = context;
        }

        // Retrieves all the weather conditions
        [HttpGet ("conditions")]
        public async Task<IActionResult> GetAllConditions () {
            var values = await _context.WeatherForecasts.ToListAsync ();
            return Ok (values);
        }

        // Retrieves the weather conditions for a specific location
        [HttpGet ("conditions/{location}")]
        public async Task<IActionResult> GetWeatherConditionForALocation (string location) {
            var conditions = await _context.WeatherForecasts.Where (weatherConditions => weatherConditions.Location == location)
                .OrderByDescending (weatherConditions => weatherConditions.Date)
                .ToListAsync ();
            return Ok (conditions);
        }

        // Retrieves all the available locations
        [HttpGet ("locations")]
        public async Task<IActionResult> GettAllLocations () {
            var values = await _context.LocationModels
                .OrderBy (location => location.Name)
                .ToListAsync ();
            return Ok (values);
        }

        // Retrieves a specific location using an id 
        [HttpGet ("locations/{id}")]
        public async Task<IActionResult> GetSpecificLocation (int id) {
            var value = await _context.LocationModels.FirstOrDefaultAsync (x => x.Id == id);
            return Ok (value);
        }
    }
}