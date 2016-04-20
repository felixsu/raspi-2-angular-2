import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteConfig} from 'angular2/router';
import {LoginComponent} from './login.component';
import {InitiatorComponent} from './initiator.component';
import {SignUpComponent} from './sign-up.component';
import {DashboardComponent} from './dashboard.component';

@Component({
    selector: 'my-app',
    template: `
            <router-outlet></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path : '/init', name : 'InitiatorRouter', component : InitiatorComponent, useAsDefault : true},
    {path : '/login', name : 'LoginRouter', component : LoginComponent},
    {path : '/sign-up', name : 'SignUpRouter', component : SignUpComponent},
    {path : '/dashboard', name : 'DashboardRouter', component : DashboardComponent}
])
export class AppComponent {

}