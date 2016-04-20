import {Component, OnInit} from 'angular2/core';
import {WeatherService} from '../services/weather.service';

@Component({
    selector : 'weather',
    template : `
        <div *ngIf="weather">
            <div>
                <h3>It's {{weather.currently.summary}} now </h3>
            </div>
            <div>
                Environment Temperature : <t1 [class.temp-component]="true">{{weather.currently.temperature}}</t1> °C
            </div>
            <div>
                Feels like : <t1 [class.temp-component]="true">{{weather.currently.apparentTemperature}}</t1> °C
            </div>
        </div>
        <div *ngIf="errorMessage">
            Error Message : {{errorMessage}}
        </div>
        <button class="btn btn-info btn-block" (click)="getWeather()">
            Refresh
        </button>
    `,
    providers : [WeatherService],
    styles : [`
        .temp-component{
            font-weight: bold;
            color: purple;
        }
    `]
    
})

export class WeatherComponent implements OnInit{
    errorMessage : string;
    weather : Weather;
    weatherJson : string;
    
    constructor(private weatherService : WeatherService){}
    
    ngOnInit(){
       this.getWeather();
    }
    
    getWeather(){
        this.weatherService.getWeather()
            .subscribe(
                data  => this.assignValue(data),
                error => this.reportError(error),
                () => console.log("Finished " + this.weather.currently.summary)
            );
    }
    
    assignValue(data : Weather){
        this.weatherJson = JSON.stringify(data);
        this.weather = data;
    }
    
    reportError(errorMessage : string){
        this.errorMessage = errorMessage;
        console.log(errorMessage);
    }
} 

export interface Weather {
    timezone : string;
    offset : number;
    currently : CurrentWeather;
}

export interface CurrentWeather{
    time : number;
    summary : string;
    precipProbability : number;
    precipIntensity : number;
    temperature : number;
    apparentTemperature : number;
    humidity : number;
    pressure : number;
    cloudCover : number;
    ozone : number;
}