import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
 reviews: string[] = [];

 constructor() {
   this.reviews.push("10 out of 10 Excellent Painting -Johnny Smith");
   this.reviews.push("5 out of 10 Lacks Depth -David Adelstein");
   this.reviews.push("2 out of 10 Way too simple and unrefined -Gerald Atkins");
   this.reviews.push("8 out of 10 Has a good focal point -Christopher Mendelsohn");
   this.reviews.push("9 out of 10 Could Include better storylines but good -Jack Waxman");
 }
}
