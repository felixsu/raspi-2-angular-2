import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {User} from '../models/user.model';

import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

@Component({
    templateUrl : '../template/page-login.html',
    directives : [MATERIAL_DIRECTIVES],
    host: {
        '[attr.flex]': 'true'
    }
})
export class LoginComponent implements OnInit{
    
    private user : User;
    
    constructor(private router : Router){}
    
    ngOnInit(){
        this.user = new User("", "");    
    }
    
    login(){
        if (this.getAuth()){
            this.routeToDashboard();
        }
    }
    
    getAuth() : boolean {
        console.log(JSON.stringify(this.user));
        return true;
    }
    
    routeToDashboard(){
        this.router.navigate(["DashboardRouter"]);
    }
}