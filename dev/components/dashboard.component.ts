import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {TemperatureComponent} from './temperature.component';
import {WeatherComponent} from './weather.component';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';


@Component({
    templateUrl : '../template/dashboard.html',
    directives : [TemperatureComponent, WeatherComponent, MATERIAL_DIRECTIVES],
    styles : [`
        [md-button] [md-icon] {
            color: rgba(0, 0, 0, 0.8);
            }
        md-card-content {
            p {
                margin-bottom: 15px;
            }
        }
    `]
})
export class DashboardComponent{
    
    constructor(private router : Router){}
    
    logout(){
        this.router.navigate(["LoginRouter"]);
    }
}