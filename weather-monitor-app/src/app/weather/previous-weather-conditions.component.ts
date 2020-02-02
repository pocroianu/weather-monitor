import { Component, OnInit, ViewChild, Input, OnDestroy, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../services/weather.service';
import { IConditions } from '../interfaces/conditions';

@Component({
    selector: 'app-previous-weather-conditions',
    templateUrl: './previous-weather-conditions.component.html',
    styleUrls: ['./previous-weather-conditions.component.css']
})
export class PreviousWeatherConditionsComponent implements OnInit, OnDestroy {

    protected breakpoint: number;
    @Input() conditions: Array<IConditions>;
    public isVisible: boolean = false;
    public isLoading: boolean = false;


    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

    constructor(private weatherService: WeatherService) { }

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
