import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {TemperatureComponent} from './temperature.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Application</h1>
        <p>Hello World!</p>
        <temperature></temperature>
    `,
    directives:[CoursesComponent, TemperatureComponent]
})
export class AppComponent {

}