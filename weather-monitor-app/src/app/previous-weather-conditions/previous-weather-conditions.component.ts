import { Component, OnInit, ViewChild, Input, OnDestroy, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../services/weather.service';
import { IConditions } from '../interfaces/conditions';

@Component({
    selector: 'app-previous-weather-conditions',
    templateUrl: './previous-weather-conditions.component.html',
    styleUrls: ['./previous-weather-conditions.component.css']
})
export class PreviousWeatherConditionsComponent implements OnInit {

    // A list that contains the previous weather conditions for a specific location
    @Input() conditions: Array<IConditions>;
    protected breakpoint: number;
    public isVisible: boolean = false;
    public isLoading: boolean = false;

    constructor(private weatherService: WeatherService) { }

    ngOnInit() {
        this.breakpoint = (window.innerWidth <= 400) ? 1 : 1;
    }

    /**
     * Checks if there are any previous weather conditions for this location
     */
    protected isPreviousWeatherDataAvailable(): boolean {
        return this.conditions !== undefined && this.conditions.length > 1;
    }


}
