import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreviousWeatherConditionsComponent } from './previous-weather-conditions/previous-weather-conditions.component';
import { LatestConditionsComponent } from './latest-conditions/latest-conditions-component.component';

@NgModule({
    declarations: [
        AppComponent,
        PreviousWeatherConditionsComponent,
        WeatherCardComponent,
        LatestConditionsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        FlexLayoutModule,
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
