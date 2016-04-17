import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {MainConfiguration} from '../main-configuration.config';
import 'rxjs/Rx';

@Injectable()
export class TemperatureRestService {
    
    private childUrl : string = 'temperature/';
    private targetUrl : string;
    
    constructor(mainConfiguration : MainConfiguration, private http : Http){
        this.targetUrl = mainConfiguration.getTargetUrl() + this.childUrl;
        console.log(this.targetUrl);
    }
    
    public getTemperature() {
        return this.http
            .get(this.targetUrl)
            //.get('http://date.jsontest.com/')
            .map(res => res.json());
    }
    
    private extractData(res : Response){
        if (res.status < 200 || res.status >= 300){
            throw new Error('Bad response status ' + res.status);
        }
        console.log(res.json);
        let body = res.json;
        return body || {};
    }
    
    private handleError (error : any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
    
}

export class MockTemperature{
    dummy : string = '[{"id":"2020","temperature":25889,"time":569000200}]';
}