import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Temperature} from '../models/temperature.model';
import {MainConfiguration} from '../main-configuration.config';
import {BaseRestService} from './base-rest.service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx'; 

@Injectable()
export class TemperatureRestService extends BaseRestService<Temperature> {
    
    constructor(mainConfiguration : MainConfiguration, http : Http){
        super(mainConfiguration, http, 'temperature/readTemperature/');
    }    
    
    public getTemperatures(id : string) : Observable<Temperature> {
        return this.http
            .get(this.targetUrl + id)
            .map(this.extractData)
            .catch(this.handleError);
    }
}