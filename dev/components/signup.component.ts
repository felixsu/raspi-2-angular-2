import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {User} from '../models/user.model';
import {SignupService} from '../services/signup.service';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

@Component({
    templateUrl : '../template/page-signup.html',
    providers : [SignupService],
    directives : [MATERIAL_DIRECTIVES],
    host: {
        '[attr.flex]': 'true'
    }
})
export class SignupComponent implements OnInit {
    valid : boolean;
    user : User;
    errorMessage : String;
    
    constructor(private signupService : SignupService){}
    
    public signMeUp(){
        if (!this.valid){
            console.info("input not valid");
        } else {
            this.signupService.postUser(this.user)
                .subscribe(
                    data  => this.assignValue(data),
                    error => this.reportError(error),
                    () => console.log("Finished")
                );
        }
        
    }
    
    public ngOnInit(){
        this.user = new User();
        this.valid = true;
    }
    
    private assignValue(user : User){
        console.info(JSON.stringify(user));
    }
    
    private reportError(errorMessage : String){
        console.info(JSON.stringify(errorMessage));
        this.errorMessage = errorMessage;
    }
}