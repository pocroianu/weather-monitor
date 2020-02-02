
/**
 * This contains informations about conditions in a specific day
 */
export interface IConditions {
    date: Date;
    location: string;
    precipitation: number;
    highestTemperature: number;
    lowestTemperature: number;
    summary: string;
}