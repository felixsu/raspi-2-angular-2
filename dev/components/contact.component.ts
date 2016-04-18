import {Component} from 'angular2/core';
import {ContactListComponent} from './contact-list.component';

@Component({
    selector : 'contact',
    template : `
        <input [(ngModel)]="contact.firstName" type="text">
        <div>
            Phone Number : {{contact.phone}}<br>
            Email : {{contact.email}}
        </div>
        
    `,
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