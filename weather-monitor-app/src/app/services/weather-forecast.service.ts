import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IConditions } from '../interfaces/conditions';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})
export class WeatherForecastService {

    private weatherForecastApiUrl = 'http://localhost:5000/weatherforecast';

    constructor(private http: HttpClient) { }

    /**
     * Returns all the weather conditions for all the days
     */
    public getWeatherData(): Observable<Array<IConditions>> {
        return this.http.get<Array<IConditions>>(this.weatherForecastApiUrl).pipe();
    }

}
