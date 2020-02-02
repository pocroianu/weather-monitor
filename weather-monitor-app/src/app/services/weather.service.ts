import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IConditions } from '../interfaces/conditions';
import { Observable } from 'rxjs/internal/Observable';
import { ILocation } from '../interfaces/location';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    protected weatherForecastApiUrl = 'http://localhost:5000/weatherforecast';

    constructor(private http: HttpClient) { }

    /**
     * Returns all the weather conditions for all the days
     */
    public getWeatherData(): Observable<Array<IConditions>> {
        return this.http.get<Array<IConditions>>(this.weatherForecastApiUrl + '/conditions').pipe();
    }

    /**
     * Retrieves the weather conditions for a specific location
     * from the API
     * @param location - the location that the user clicked
     */
    public getWeatherDataForLocation(location: string): Observable<Array<IConditions>> {
        return this.http.get<Array<IConditions>>(this.weatherForecastApiUrl + '/conditions/' + location).pipe();
    }

    /**
     * Returns all the locations availabe in the database
     */
    public getAllLocations(): Observable<Array<ILocation>> {
        return this.http.get<Array<ILocation>>(this.weatherForecastApiUrl + '/locations').pipe();
    }

}
