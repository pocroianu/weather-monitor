import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecastService } from '../services/weather-forecast.service';
import { IConditions } from '../interfaces/conditions';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
    protected breakpoint;
    protected conditions: Array<IConditions>;

    constructor(private weatherService: WeatherForecastService) { }

    ngOnInit() {
        this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
        this.getWeatherConditions();
    }

    protected getWeatherConditions(): void {
        this.weatherService.getWeatherData().subscribe(conditions => {
            this.conditions = conditions;
        });
    }


}
