import {Component} from 'angular2/core';
import {ContactListComponent} from '../components/contact-list.component';

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

export class Contact{
    firstName : string;
    lastName : string;
    phone : string;
    email : string;
    
    constructor(firstName : string, lastName : string , phone : string, email : string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
    }
}