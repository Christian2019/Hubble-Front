import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.scss']
})
export class EventListingComponent implements OnInit {

  @Input('pageContent') pageData: JSON;
  @Input('cardContent') cardData: JSON[];

  constructor() { }

  ngOnInit() {
  }

}
