import {Component, OnInit} from 'angular2/core';
import {TemperatureRestService} from '../services/temperature-rest.service';
import {INITIAL_TEMPERATURE} from '../mock/temperature-mock';

@Component({
    selector:'temperature',
    template:`
        <div *ngFor = "#mTemperature of temperatures">
            <div>
                <h3>Probe ID = {{mTemperature.id}}</h3>
            </div>
            <div>
                current temperature = <t1 [class.temp-component]="true">{{mTemperature.temp/1000}} °C</t1>
            </div>
            <div>data provided by RasPi-2</div>
        </div>
        <div *ngIf="errorMessage">
            Error Message : {{errorMessage}}
        </div>
        <button class="btn btn-info btn-block" (click)="getTemperatures()">
            Refresh
        </button>
    `,
    providers : [TemperatureRestService],
    styles : [`
        .temp-component{
            font-weight: bold;
            color: purple;
        }
    `]
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