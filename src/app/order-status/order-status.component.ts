import { Component } from '@angular/core';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent {
  ordersStatus: { text: string, status: string }[] = [];

  constructor() {
    this.ordersStatus.push({
      text: "Steven Colman ordered a Sunflowers painting",
      status: "Ordered and Shipped"
    });
    this.ordersStatus.push({
      text: "Olivia Firestein ordered a Le Moulin de Blute-Fin painting",
      status: "Order in Progress"
    });
    this.ordersStatus.push({
      text: "Joseph Altman ordered The Night Cafe painting",
      status: "Order in Progress"
    });
    this.ordersStatus.push({
      text: "Alan Taylor ordered The Potato Eaters painting",
      status: "Ordered and Shipped"
    });
    this.ordersStatus.push({
      text: "Harlan Coben ordered a Whitefield with Crows painting",
      status: "Order in Progress"
    });
    this.ordersStatus.push({
      text: "Henry Ford ordered a Sunflowers painting",
      status: "Order in Progress"
    });
    this.ordersStatus.push({
      text: "Kevin Brown ordered a Le Moulin de Blute-Fin painting",
      status: "Order in Progress"
    });
    this.ordersStatus.push({
      text: "Sean Willed ordered The Night Cafe painting",
      status: "Order in Progress"
    });
    this.ordersStatus.push({
      text: "Jessie Miller ordered The Potato Eaters painting",
      status: "Ordered and Shipped"
    });
    this.ordersStatus.push({
      text: "David Finer ordered a Whitefield with crows painting",
      status: "Order in Progress"
    });
  }
}
