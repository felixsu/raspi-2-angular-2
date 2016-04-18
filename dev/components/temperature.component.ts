import {Component, OnInit} from 'angular2/core';
import {TemperatureRestService} from '../services/temperature-rest.service';
import {INITIAL_TEMPERATURE} from '../mock/temperature-mock';

@Component({
    selector:'temperature',
    template:`
        <h2>
            RND Temperature
        </h2>
        <p *ngFor = "#mTemperature of temperatures">
            <t1>Probe ID = {{mTemperature.id}} <br></t1>
            current temperature = <t1 [class.temp-component]="true">{{mTemperature.temp/1000}} °C</t1>
            <br><br>
        </p>
        <button (click)="getTemperatures()">
            Refresh
        </button>
    `,
    providers : [TemperatureRestService],
    styleUrls : ["../src/css/mycomponent.css"]
})

export class TemperatureComponent implements OnInit{
    errorMessage : string;
    temperatures : Temperature[];
    
    constructor(private temperatureRestService : TemperatureRestService){
    }
    
    ngOnInit(){
        this.getTemperatures();    
    }
    
    getTemperatures(){
        this.temperatureRestService.getTemperatures()
            .subscribe(
                data  => this.assignValue(data),
                error => this.reportError(error),
                () => console.log("Finished " + this.temperatures)
            );
    }
    
    assignValue(data : Temperature[]){
        this.temperatures = data;
    }
    
    reportError(errorMessage : string){
        this.errorMessage = errorMessage;
        console.log(errorMessage);
    }
}

export interface Temperature{
    id : string;
    temp : number;
    time : number;
}