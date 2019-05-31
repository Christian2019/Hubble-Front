import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActionTypesEnum } from 'src/app/shared/enums/ActionTypesEnum';
import { ActionButtonTextEnum } from 'src/app/shared/enums/ActionButtonTextEnum';
import { EventListingObject } from 'src/app/shared/interfaces/EventListingSchema';
import { EventCardObject } from 'src/app/shared/interfaces/EventCardSchema';


@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.scss']
})

export class EventListingComponent implements OnInit {

  @Input('data') pageData: EventListingObject;
  @Output() selectedEventCard: EventEmitter<EventCardObject>;

  constructor() {
    this.selectedEventCard = new EventEmitter<EventCardObject>();
  }

  ngOnInit() {}

  cardActionHandler($event: EventCardObject){
    console.log($event);
    this.selectedEventCard.emit($event);
  }

}
