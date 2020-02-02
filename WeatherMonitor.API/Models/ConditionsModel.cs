using System;

namespace WeatherMonitor.API {

    /*
    This will hold a location's conditions like temperature, chance of precipitation etc
    */
    public class ConditionsModel {
        public int Id { get; set; }

        public string Location { get; set; }

        public DateTime Date { get; set; }

        public int HighestTemperature { get; set; }

        public int LowestTemperature { get; set; }

        public int Precipitation { get; set; }

        public string Summary { get; set; }
    }
}