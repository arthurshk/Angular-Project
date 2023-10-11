import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';
import { PipesTestComponent } from './pipes-test/pipes-test.component';
import {FormsModule} from "@angular/forms";
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactsComponent } from './contacts/contacts.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderStatusComponent } from './order-status/order-status.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoItemsComponent,
    PipesTestComponent,
    PortfolioComponent,
    AboutComponent,
    GalleryComponent,
    FooterComponent,
    NavComponent,
    ReviewsComponent,
    ContactsComponent,
    OrdersComponent,
    OrderStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
