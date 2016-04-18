import {Component, OnInit} from 'angular2/core';
import {Contact, ContactComponent} from './contact.component';
import {ContactService} from '../services/contact.service';

@Component({
    selector : 'contact-list',
    template:`
        <h1>Contact Title with 2 way data binding</h1>
        <ul> 
            <li *ngFor="#contact of contacts"
                (click)="onSelect(contact)"
                [class.clicked]="selectedContact === contact"
            >
                {{contact.firstName}} {{contact.lastName}}
            </li>
        </ul>
        <contact [contact] = selectedContact></contact>
    `,
    styleUrls : ["../src/css/contactcomponent.css"],
    directives: [ContactComponent],
    providers : [ContactService]
})

export class ContactListComponent implements OnInit{
    private selectedContact = {};
    private contacts : Contact[];
    
    constructor(private contactService : ContactService){}
    
    ngOnInit(){
        this.getContacts();    
    }
    
    onSelect(contact : Contact){
        this.selectedContact = contact;
    }
    
    getContacts(){
        this.contactService.getContacts().then((contacts : Contact[]) => this.contacts = contacts);
    }
}