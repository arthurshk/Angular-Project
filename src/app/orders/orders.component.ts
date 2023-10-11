import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders: { text: string}[] = [];

  constructor() {
    this.orders.push({
      text: "Steven Colman ordered a Sunflowers painting"
    });
    this.orders.push({
      text: "Olivia Firestein ordered a Le Moulin de Blute-Fin painting"
    });
    this.orders.push({
      text: "Joseph Altman ordered The Night Cafe painting"
    });
    this.orders.push({
      text: "Alan Taylor ordered The Potato Eaters painting"
    });
    this.orders.push({
      text: "Harlan Coben ordered a Whitefield with Crows painting"
    });
    this.orders.push({
      text: "Henry Ford ordered a Sunflowers painting"
    });
    this.orders.push({
      text: "Kevin Brown ordered a Le Moulin de Blute-Fin painting"
    });
    this.orders.push({
      text: "Sean Willed ordered The Night Cafe painting"
    });
    this.orders.push({
      text: "Jessie Miller ordered The Potato Eaters painting"
    });
    this.orders.push({
      text: "David Finer ordered a Whitefield with crows painting"
    });
  }
}
