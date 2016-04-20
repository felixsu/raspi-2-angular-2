import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {TemperatureComponent} from './temperature.component';
import {WeatherComponent} from './weather.component';


@Component({
    templateUrl : '../template/layout-nav-custom.html',
    directives : [TemperatureComponent, WeatherComponent]
})
export class DashboardComponent{
    
    constructor(private router : Router){}
    
    logout(){
        this.router.navigate(["LoginRouter"]);
    }
}