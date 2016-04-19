import {Injectable} from 'angular2/core';
import {Contact} from '../components/contact.component';
import {CONTACTS} from '../mock/contact-mock';

@Injectable()
export class ContactService{
    
    public getContacts(){
        return Promise.resolve(CONTACTS);
    }
    
    public insertContact(contact : Contact){
        Promise.resolve(CONTACTS).then((contacts : Contact[]) => contacts.push(contact));
    }
}