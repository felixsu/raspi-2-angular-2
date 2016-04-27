import {Component, OnInit} from 'angular2/core';
import {WeatherService} from '../services/weather.service';
import {Weather} from '../models/weather.model';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

@Component({
    selector : 'weather',
    template : `
        <md-card class="card-sm">
            <img class="md-user-avatar" src="../assets/img/ic_weather_snowy.png" style="width:96px;height:96px;">
            <md-card-content>
                <div layout="row" style="height:24px;" layout-align="start end">
                    <div *ngIf="weather" flex="60" style="font-size:150%;">{{weather.description}}</div>
                    <div *ngIf="weather" flex="40" style="font-size:100%;">
                        Chance rain<br>{{weather.chanceRain}}%
                    </div>
                </div>
            </md-card-content>
        </md-card>
    `,
    providers : [WeatherService],
    directives : [MATERIAL_DIRECTIVES],
    styleUrls : ['../../src/css/card-component.css']
    
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
                () => console.log("Finished " + this.weather.description)
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