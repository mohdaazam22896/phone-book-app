import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../Contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contactList: Contact[] = [
    { firstName: 'First Name 1', lastName: 'Last name 1', phoneNumber: "987654321", id: 1 },
    { firstName: 'First Name 2', lastName: 'Last name 2', phoneNumber: "987654321", id: 2 },
    { firstName: 'First Name 3', lastName: 'Last name 3', phoneNumber: "987654321", id: 3 },
    { firstName: 'First Name 4', lastName: 'Last name 4', phoneNumber: "987654321", id: 4 },
    { firstName: 'First Name 5', lastName: 'Last name 5', phoneNumber: "987654321", id: 5 },
    { firstName: 'First Name 6', lastName: 'Last name 6', phoneNumber: "987654321", id: 6 },
    { firstName: 'First Name 7', lastName: 'Last name 7', phoneNumber: "987654321", id: 7 },
  ]

  constructor(private router: Router, private contactService: ContactService) { }

  test: string = ''

  ngOnInit() {
    this.contactService.getContacts().subscribe(data => {
      this.contactList = data.sort((a, b) => {
        return a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1
      })
    })
  }

  // Add New Contact
  addContact(): void {
    this.router.navigate(['addContact'])
  }

  // Delete Contact
  deleteContact(contact: Contact): void {
    this.contactService.deleteContact(contact.id).subscribe(data => {
      this.contactList = this.contactList.filter(c => c !== contact)
    })
  }

}
