import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:3000/contacts' // a url for server where backend is running...

  // get all contact
  getContacts() {
    return this.http.get<Contact[]>(this.baseUrl)
  }

  // create contact
  createContact(contact: Contact) {
    return this.http.post(this.baseUrl, contact)
  }

  // delete contact
  deleteContact(id: number) {
    return this.http.delete(this.baseUrl + '/' + id)
  }
}
