import {Component, Input, ApplicationRef} from 'angular2/core';
import {Router} from 'angular2/router';
import {IndoorTemperatureComponent} from './indoor-temperature.component';
import {OutdoorTemperatureComponent} from './outdoor-temperature.component';
import {WeatherComponent} from './weather.component';
import {DashboardBodyComponent} from './dashboard-body.component';
import {MATERIAL_DIRECTIVES, Media, SidenavService} from "ng2-material/all";


@Component({
    templateUrl : '../template/dashboard.html',
    directives : [IndoorTemperatureComponent, OutdoorTemperatureComponent, WeatherComponent, 
                    DashboardBodyComponent, MATERIAL_DIRECTIVES],
    providers : [SidenavService],
    host: {
        '[class.push-menu]': 'fullPage'
    }
})
export class DashboardComponent{
    static SIDE_MENU_BREAKPOINT: string = 'gt-md';
    
    sideBarElements : string[] = DUMMY_ELEMENTS;
    
    @Input()
    fullPage: boolean = this.media.hasMedia(DashboardComponent.SIDE_MENU_BREAKPOINT);
    
    public site: string = 'Angular2 Material';
    public title : string = 'Pingular';
    private _subscription = null;
    
    constructor(private _router : Router, 
                private _sidenav: SidenavService,
                public appRef: ApplicationRef,
                public media: Media){
                    
        let query = Media.getQuery(DashboardComponent.SIDE_MENU_BREAKPOINT);
        this._subscription = media.listen(query).onMatched.subscribe((mql: MediaQueryList) => {
            this.fullPage = mql.matches;
            this.appRef.tick();
        });
    }
    
    showMenu(event?) {
        this._sidenav.show('menu');
    }
  
    logout(){
        this._router.navigate(["LoginRouter"]);
    }
}

export const DUMMY_ELEMENTS : string[] = [
    "dummy 1", "dummy 2"
]