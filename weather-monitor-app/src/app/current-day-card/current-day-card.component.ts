import { Component, OnInit, Input } from '@angular/core';
import { IConditions } from '../interfaces/conditions';

@Component({
    selector: 'app-current-day-card',
    templateUrl: './current-day-card.component.html',
    styleUrls: ['./current-day-card.component.css']
})
export class CurrentDayCardComponent implements OnInit {

    @Input() latestWeatherConditions: IConditions;

    constructor() { }

    ngOnInit() {
    }

    protected onChangeToCelsius(): void {

    }

    protected onChangeToFahrenheit(): void {

    }

}
