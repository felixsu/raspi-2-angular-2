import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {TemperatureComponent} from './temperature.component';
import {WeatherComponent} from './weather.component';
import {ContactListComponent} from './contact-list.component';

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
        EXAMPLE
        <br>
        <contact-list></contact-list>
        <courses></courses>
    `,
    directives:[ContactListComponent, CoursesComponent, TemperatureComponent, WeatherComponent],
    styleUrls : ["./src/css/mycomponent.css"]
})
export class AppComponent {

}