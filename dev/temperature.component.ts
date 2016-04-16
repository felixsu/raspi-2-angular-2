import {Component, OnInit} from 'angular2/core';
import {TemperatureRestService} from './temperature-rest.service';

@Component({
    selector:'temperature',
    template:`
        <h1>Temperature Title</h1>
        <p>{{temperature}}</p>
        <button (click)="getTemperature()">get temperature</button>
    `,
    providers:[TemperatureRestService]
})

export class TemperatureComponent implements OnInit{
    errorMessage : string;
    temperature : string;
    
    constructor(private temperatureRestService : TemperatureRestService){}
    
    ngOnInit(){
        this.getTemperature();    
    }
    
    getTemperature(){
        this.temperatureRestService.getTemperature()
            .subscribe(
                data => this.temperature = JSON.stringify(data),
                error => alert(error),
                () => console.log("Finished " + this.temperature)
            );
    }
}