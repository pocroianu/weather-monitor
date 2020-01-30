import { Component, OnInit, Input } from '@angular/core';
import { IConditions } from '../interfaces/conditions';


@Component({
    selector: 'app-weather-card',
    templateUrl: './weather-card.component.html',
    styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

    @Input()
    public conditionsForThisDay: IConditions;

    constructor() {
    }

    ngOnInit() {
    }

}
