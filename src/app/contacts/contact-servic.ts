import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  post(contact:Contact){
      /** contact service */
      console.log("Contact:"+contact.email);
      return true;
  }
}
