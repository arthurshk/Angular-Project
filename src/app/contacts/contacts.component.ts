import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contacts: string[] = [];

  constructor() {
    this.contacts.push("John O'Leary General Manager 293-493-5555");
    this.contacts.push("Alex Fernandez CEO 491-222-9402");
    this.contacts.push("Zachary Orloff Inventory Manager 555-302-4920");
    this.contacts.push("Jared Burmistroff Picker/Packer 593-293-1111");
  }
}
