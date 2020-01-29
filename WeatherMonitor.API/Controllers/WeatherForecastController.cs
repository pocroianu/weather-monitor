using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using WeatherMonitor.API.Data;

namespace WeatherMonitor.API.Controllers {
    [ApiController]
    [Route ("[controller]")]
    public class WeatherForecastController : ControllerBase {
        private readonly WeatherData _context;
        public WeatherForecastController (WeatherData context) {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetValues () {
            var values = await _context.WeatherForecasts.ToListAsync ();
            return Ok (values);
        }

        [HttpGet ("{id}")]
        public async Task<IActionResult> GetValue (int id) {
            var value = await _context.WeatherForecasts.FirstOrDefaultAsync (x => x.Id == id);
            return Ok (value);
        }
    }
}