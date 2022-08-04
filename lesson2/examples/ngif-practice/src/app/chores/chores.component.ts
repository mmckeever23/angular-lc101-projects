import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [];
   finishedChores = ['Empty dishwasher'];

   targetImage = 'https://cdn.gamephd.com/wp-content/uploads/2019/01/Ganbare-Pennant-Race-Japan-770x472.jpeg';

   constructor() { }

   ngOnInit() {
   }

}
