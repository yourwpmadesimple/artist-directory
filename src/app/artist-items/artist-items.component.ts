import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-items',
  templateUrl: './artist-items.component.html',
  inputs: ['artist']
})
export class ArtistItemsComponent implements OnInit {
  tnimage: any;
  
  constructor() {
    this.tnimage = "assets/images/";
   }

  ngOnInit() {
  }

}
