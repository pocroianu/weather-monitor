import { Component, OnInit, ViewChild, Input, OnDestroy, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecastService } from '../services/weather-forecast.service';
import { IConditions } from '../interfaces/conditions';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy {

    protected breakpoint: number;
    @Input() conditions: Array<IConditions>;
    public isVisible: boolean = false;
    public isLoading: boolean = false;


    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

    constructor(private weatherService: WeatherForecastService) { }

    ngOnInit() {
        // this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
        this.breakpoint = (window.innerWidth <= 400) ? 1 : 1;
    }

    ngOnDestroy(): void {
        console.log('WeatherComponent Destroyed')
    }


    protected isPreviousWeatherDataAvailable(): boolean {
        return this.conditions !== undefined && this.conditions.length > 1;
    }


}
