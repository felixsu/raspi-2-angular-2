import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {TemperatureComponent} from './temperature.component';
import {ContactListComponent} from './contact-list.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Pi Application</h1>
        <contact-list></contact-list>
        <courses></courses>
        <temperature></temperature>
    `,
    directives:[ContactListComponent, CoursesComponent, TemperatureComponent]
})
export class AppComponent {

}