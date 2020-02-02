import { Component, OnInit, Input } from '@angular/core';
import { IConditions } from '../interfaces/conditions';

@Component({
    selector: 'app-latest-conditions',
    templateUrl: './latest-conditions-component.component.html',
    styleUrls: ['./latest-conditions-component.component.css']
})
export class LatestConditionsComponent implements OnInit {

    @Input() latestWeatherConditions: IConditions;

    constructor() { }

    ngOnInit() {
    }

    /**
     * Anchor point
     */
    protected onChangeToCelsius(): void {

    }

    /**
     * Anchor point
     */
    protected onChangeToFahrenheit(): void {

    }

}
