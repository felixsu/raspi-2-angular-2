import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {MainConfiguration} from '../main-configuration.config';
import 'rxjs/Rx';

export class BaseRestService<T extends Object>{
    
    protected targetUrl : string;
    
    constructor(mainConfiguration : MainConfiguration, protected http : Http, protected childUrl : string){
        this.targetUrl = mainConfiguration.getTargetUrl() + childUrl;
        console.log(this.targetUrl);
    }
    
    protected extractData(res : Response){
        console.log("entering extract data with response " + res.status);
        if (res.status < 200 || res.status >= 300){
            throw new Error('Bad response status ' + res.status);
        }
        console.log("got res 200, try to parse");
        
        let body = res.json();
        return body;
    }
    
    protected handleError (error : any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}