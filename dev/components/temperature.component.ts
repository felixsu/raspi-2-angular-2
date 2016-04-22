import {Component, OnInit} from 'angular2/core';
import {TemperatureRestService} from '../services/temperature-rest.service';
import {INITIAL_TEMPERATURE} from '../mock/temperature-mock';

@Component({
    selector:'temperature',
    template:`
        <div *ngFor = "#mTemperature of temperatures">
            <div>
                {{mTemperature.temp}}°C
            </div>
        </div>
    `,
    providers : [TemperatureRestService]
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
        this.temperatures[0].temp = Math.round(this.temperatures[0].temp/1000);
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