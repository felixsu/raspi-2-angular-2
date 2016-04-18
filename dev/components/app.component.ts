import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {TemperatureComponent} from './temperature.component';
import {WeatherComponent} from './weather.component';
import {ContactListComponent} from './contact-list.component';
import {NewContactComponent} from './new-contact.component';
import {ROUTER_DIRECTIVES,RouteConfig} from 'angular2/router'

@Component({
    selector: 'my-app',
    template: `
        <h1>Welcome to Angular 2 Pi 2 App</h1>
        <table [class.my-table]="true">
            <tbody>
                <tr>
                    <td><temperature></temperature></td>
                    <td><weather></weather></td>
                </tr>
            </tbody>
        </table>
        <hr>
        <br><br>
        EXAMPLE<br>
        <nav>
            <a [routerLink]="['Contacts']">Contact</a>
            <a [routerLink]="['NewContact']">New Contact</a>
        </nav>
        <div class='main'>
            <router-outlet></router-outlet>
            <courses></courses>
        </div>
    `,
    directives:[ContactListComponent, CoursesComponent, TemperatureComponent, WeatherComponent, ROUTER_DIRECTIVES],
    styleUrls : ["./src/css/mycomponent.css"]
})

@RouteConfig([
    {path : '/contacts', name : 'Contacts', component : ContactListComponent, useAsDefault : true},
    {path : '/new-contacts', name : 'NewContact', component : NewContactComponent}
])
export class AppComponent {

}