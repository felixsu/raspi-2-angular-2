import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    template : `
        <div>
            Loading....
        </div>
    `
})
export class InitiatorComponent implements OnInit {
    
    constructor(private router : Router){}
    
    ngOnInit(){
        this.route();    
    }
    
    route(){
        console.log("entering init routing");
        if (this.isAuthenticated()){
            this.router.navigate(["DashboardRouter"]);
        } else {
            this.router.navigate(["LoginRouter"]);
        }
    }
    
    isAuthenticated() : boolean {
        return false;
    }
}