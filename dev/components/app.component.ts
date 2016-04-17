import {Component} from 'angular2/core';
import {CoursesComponent} from '../components/courses.component';
import {TemperatureComponent} from '../components/temperature.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Pi Application</h1>
        <courses></courses>
        <temperature></temperature>
    `,
    directives:[CoursesComponent, TemperatureComponent]
})
export class AppComponent {

}