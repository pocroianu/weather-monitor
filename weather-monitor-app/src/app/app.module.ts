import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatDividerModule} from '@angular/material/divider'; 

import { AppComponent } from './app.component';
import { PreviousWeatherConditionsComponent } from './weather/previous-weather-conditions.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LatestConditionsComponent } from './current-day-card/latest-conditions-component.component';

const appRoutes: Routes = [
    {
        path: 'weatherData',
        component: PreviousWeatherConditionsComponent,
    },
];

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
        MatTableModule,
        RouterModule.forRoot(appRoutes),
        FlexLayoutModule,
        FontAwesomeModule,
        MatDividerModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
