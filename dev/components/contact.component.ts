import {Component} from 'angular2/core';
import {ContactListComponent} from './contact-list.component';

@Component({
    selector : 'contact',
    template : `
        <h2> Edit Contact </h2>
        <div>
            <div>
                <label for="firstName">First Name </label>
                <input [(ngModel)]="contact.firstName" type="text" id = "firstName">
            </div>
            <div>
                <label for="lastName">Last Name </label>
                <input [(ngModel)]="contact.lastName" type="text" id="lastName">
            </div>
            <div>
                <label for="phone">Phone </label>
                <input [(ngModel)]="contact.phone" type="text" id="phone">
            </div>
            <div>
                <label for="email">Email </label>
                <input [(ngModel)]="contact.email" type="text" id="email">
            </div>
        </div>
    `,
    styles : [`
        label {
            width : 140px;
            display : inline-block;
        }
        input {
            width : 250px;
        }
        
    `],
    inputs:["contact"]
})

export class ContactComponent{
    
}

export interface Contact{
    firstName : string;
    lastName : string;
    phone : string;
    email : string;
}