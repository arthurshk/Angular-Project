import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {AppComponent} from "./app.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ReviewsComponent} from "./reviews/reviews.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {OrdersComponent} from "./orders/orders.component";
import {OrderStatusComponent} from "./order-status/order-status.component";

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: '', component: PortfolioComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'orders-status', component: OrderStatusComponent}
  /*{path: '', component: AppComponent},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
