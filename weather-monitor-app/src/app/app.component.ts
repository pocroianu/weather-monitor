import { Component, ViewChild } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { ILocation } from './interfaces/location';
import { IConditions } from './interfaces/conditions';
import { PreviousWeatherConditionsComponent } from './previous-weather-conditions/previous-weather-conditions.component';
import { LatestConditionsComponent } from './latest-conditions/latest-conditions-component.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild(PreviousWeatherConditionsComponent, { static: false }) weatherComponent: PreviousWeatherConditionsComponent;
    @ViewChild(LatestConditionsComponent, { static: false }) latestWeatherConditions: LatestConditionsComponent;

    public availableLocations: Array<ILocation>;
    public selected: string;

    constructor(private weatherService: WeatherService) {
    }

    ngOnInit() {
        this.weatherService.getAllLocations().subscribe(locations => {
            this.availableLocations = locations;
        });
    }

    /**
     * Handler for make a query button clicked
     */
    protected onMakeAQueryButtonClicked(): void {
        this.weatherComponent.isLoading = true;
        this.weatherService.getWeatherDataForLocation(this.selected).subscribe(locations => {
            this.onQueryCompleted(locations);
        });
    }

    /**
     * Handler for make a query completed
     * @param weatherConditions - the weather conditions that was retrieved from the API
     */
    protected onQueryCompleted(weatherConditions: Array<IConditions>): void {
        if (weatherConditions === undefined) {
            return;
        }
        this.weatherComponent.conditions = weatherConditions.splice(1);
        this.weatherComponent.isVisible = true;
        this.weatherComponent.isLoading = false;
        this.latestWeatherConditions.latestWeatherConditions = weatherConditions[0];
    }

    /**
     * Handler for clearButton cliked
     */
    protected onClearButtonClicked(): void {
        this.weatherComponent.isVisible = false;
        this.weatherComponent.conditions = [];
        this.latestWeatherConditions.latestWeatherConditions = undefined;
    }

}
