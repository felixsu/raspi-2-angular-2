import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    templateUrl : '../template/pages-login.html'
})
export class LoginComponent{
    
    constructor(private router : Router){}
    
    login(){
        if (this.getAuth()){
            this.routeToDashboard();
        }
    }
    
    getAuth() : boolean {
        return true;
    }
    
    routeToDashboard(){
        this.router.navigate(["DashboardRouter"]);
    }
}