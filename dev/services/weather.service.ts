import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Weather} from '../components/weather.component';
import {MainConfiguration} from '../main-configuration.config';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx' 

@Injectable()
export class WeatherService{
    
    private childUrl : string = 'weather/';
    private targetUrl : string;
    
    constructor(mainConfiguration : MainConfiguration, private http : Http){
        this.targetUrl = mainConfiguration.getTargetUrl() + this.childUrl;
        console.log(this.targetUrl);
    }
    
    public getWeather() : Observable<Weather> {
        return this.http
            .get(this.targetUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    private extractData(res : Response){
        console.log("entering extract data with response " + res.status);
        if (res.status < 200 || res.status >= 300){
            throw new Error('Bad response status ' + res.status);
        }
        console.log("got res 200, try to parse");
        
        let body = res.json();
        return body;
    }
    
    private handleError (error : any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}