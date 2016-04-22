import {Component, OnInit} from 'angular2/core';
import {WeatherService} from '../services/weather.service';

@Component({
    selector : 'weather',
    template : `
        <div *ngIf="weather" layout="row" style="height:80px;" layout-align="start end">
            <div flex="50" style="font-size:350%;">{{weather.currently.temperature}}°C</div>
            <div flex="50" style="font-size:100%;">Feels like<br>{{weather.currently.apparentTemperature}}°C</div>
        </div>
    `,
    providers : [WeatherService]
    
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
        
        this.weather.currently.temperature = Math.round(data.currently.temperature);
        this.weather.currently.apparentTemperature = Math.round(data.currently.apparentTemperature);
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