import {Component} from 'angular2/core';
import {Contact, ContactComponent} from '../components/contact.component';

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
    directives: [ContactComponent]
})

export class ContactListComponent{
    private selectedContact = {};
    private contacts : Contact[];
    
    constructor(){
        this.contacts = [
            {"firstName":"Felix","lastName":"Su","phone":"082188881592","email":"felix.soewito@gmail.com"},
            {"firstName":"Villa","lastName":"Isbung","phone":"082188884949","email":"villa.isbung@gmail.com"},
            {"firstName":"Minion","lastName":"Mini","phone":"082188889982","email":"minion.mini@gmail.com"}
            ];
    }
    
    onSelect(contact : Contact){
        this.selectedContact = contact;
    }
}