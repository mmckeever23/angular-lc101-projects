import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Some Pretty Badass Saxophone Players!';
  image1 = 'https://tse2.mm.bing.net/th?id=OIP.y3cqykhghU0B1VSW0G5POgHaIx&pid=Api';
  image2 = 'https://tse1.mm.bing.net/th?id=OIP.6aERJNwBZHFPTc4AnJgoHQHaLI&pid=Api';
  image3 = 'https://tse4.mm.bing.net/th?id=OIP.y_IbRqF7gd7t6wDVXPNhlgHaLI&pid=Api';

  constructor() { }

  ngOnInit() {
  }

}