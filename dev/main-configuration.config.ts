import {Injectable} from 'angular2/core';

@Injectable()
export class MainConfiguration{
    //private targetUrl : string = 'http://md5.jsontest.com/?text=%5Btext';
    private targetUrl : string = 'http://172.30.44.94:8080/raspi/';
    
    public getTargetUrl() : string {
        return this.targetUrl;
    }
}