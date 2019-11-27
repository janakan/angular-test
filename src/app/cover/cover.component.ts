import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class CoverComponent implements OnInit {

  constructor() { }

  thumbnail:string = "Janakan";
  items = [
    {name:"Janakan"},
    {name:"Yeshanti"}
  ];

  ngOnInit() {
  }

}
