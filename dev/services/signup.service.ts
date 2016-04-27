import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {User} from '../models/user.model';
import {MainConfiguration} from '../main-configuration.config';
import {BaseRestService} from './base-rest.service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx'; 

@Injectable()
export class SignupService extends BaseRestService<User> {
    
    constructor(mainConfiguration : MainConfiguration, http : Http){
        super(mainConfiguration, http, 'sign-up/');
    }    
    
    public postUser(user : User) : Observable<User> {
        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http
            .post(this.targetUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
}