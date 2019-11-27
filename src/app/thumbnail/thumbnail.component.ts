import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ThumbnailComponent implements OnInit {

  constructor() { }

  @Input() item: string; // decorate the property with @Input()

  ngOnInit() {
  }

}
