import {Component, OnInit} from 'angular2/core';
import {TemperatureRestService} from '../services/temperature-rest.service';
import {Temperature} from '../models/temperature.model';
import {INITIAL_TEMPERATURE} from '../mock/temperature-mock';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

@Component({
    selector:'outdoor-temperature',
    template:`
        <md-card class="card-sm">
            <md-card-header>
                <md-card-header-text>
                    <span class="md-title">Outside Temperature</span>
                </md-card-header-text>
            </md-card-header>
            <md-card-content>
                <div *ngIf="temperature" layout="row" style="height:80px;" layout-align="start end">
                    <div flex="70" style="font-size:275%;">{{temperature.temperature}}°C</div>
                    <div flex="30" style="font-size:100%;">Feels like<br>{{temperature.apparentTemperature}}°C</div>
                </div>
                <div *ngIf="errorMessage">
                    NA
                </div>
            </md-card-content>
        </md-card>
    `,
    providers : [TemperatureRestService],
    directives : [MATERIAL_DIRECTIVES],
    styleUrls : ['../../src/css/card-component.css']
})

export class OutdoorTemperatureComponent implements OnInit{
    errorMessage : string;
    temperature : Temperature;
    
    constructor(private temperatureRestService : TemperatureRestService){
    }
    
    ngOnInit(){
        this.getTemperatures();    
    }
    
    getTemperatures(){
        this.temperatureRestService.getTemperatures('f-io-src')
            .subscribe(
                data  => this.assignValue(data),
                error => this.reportError(error),
                () => console.log("Finished " + this.temperature.deviceId)
            );
    }
    
    assignValue(data : Temperature){
        this.temperature = data;
    }
    
    reportError(errorMessage : string){
        this.errorMessage = errorMessage;
        console.log(errorMessage);
    }
}