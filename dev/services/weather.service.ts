import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Weather} from '../models/weather.model';
import {BaseRestService} from './base-rest.service';
import {MainConfiguration} from '../main-configuration.config';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx' 

@Injectable()
export class WeatherService extends BaseRestService<Weather> {
    
    constructor(mainConfiguration : MainConfiguration, http : Http){
        super(mainConfiguration, http, 'weather/');
    }
    
    public getWeather() : Observable<Weather> {
        return this.http
            .get(this.targetUrl + '/simple')
            .map(this.extractData)
            .catch(this.handleError);
    }
}