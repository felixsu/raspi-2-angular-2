import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {TemperatureComponent} from './temperature.component';
import {WeatherComponent} from './weather.component';
import {MATERIAL_DIRECTIVES, Media, SidenavService} from "ng2-material/all";


@Component({
    templateUrl : '../template/dashboard.html',
    directives : [TemperatureComponent, WeatherComponent, MATERIAL_DIRECTIVES],
    providers : [SidenavService]
})
export class DashboardComponent{
    
    constructor(private router : Router, 
                public sidenav: SidenavService,
                public media: Media){}
    
    hasMedia(breakSize: string): boolean {
        return this.media.hasMedia(breakSize);
    }
    open(name: string) {
        this.sidenav.show(name);
    }
    close(name: string) {
        this.sidenav.hide(name);
    }
  
    logout(){
        this.router.navigate(["LoginRouter"]);
    }
}