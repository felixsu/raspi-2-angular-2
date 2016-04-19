import {Component} from 'angular2/core';
import {ContactListComponent} from './contact-list.component';
import {ContactService} from '../services/contact.service';
import {Contact} from './contact.component';
import {Router} from 'angular2/router'

@Component({
    selector : 'new-contact',
    template : `
        <h2>New Contact</h2>
        <div>
            <div>
                <label for="firstName">First Name </label>
                <input type="text" id = "firstName" #firstName>
            </div>
            <div>
                <label for="lastName">Last Name </label>
                <input type="text" id="lastName" #lastName>
            </div>
            <div>
                <label for="phone">Phone </label>
                <input type="text" id="phone" #phone>
            </div>
            <div>
                <label for="email">Email </label>
                <input type="text" id="email" #email>
            </div>
        </div>
        <button (click)="insertContact(firstName.value, lastName.value, phone.value, email.value)">Create Contact</button>
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
    providers : [ContactService]
})
export class NewContactComponent{
    
    constructor(private contactService : ContactService, private router : Router){}
    
    insertContact(firstName, lastName, phone, email){
        let candidate : Contact = {firstName : firstName, phone : phone, email : email, lastName : lastName};
        this.contactService.insertContact(candidate);
        this.router.navigate(["Contacts"]);
    }
}