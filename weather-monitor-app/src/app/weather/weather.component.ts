import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
    protected values: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.getWeatherData();
    }

    protected getWeatherData(): void {
        this.http.get('http://localhost:5000/weatherforecast').subscribe(
            response => {
                this.values = response;
            },
            error => {
                console.log('Error');
            }
        );
    }
}
