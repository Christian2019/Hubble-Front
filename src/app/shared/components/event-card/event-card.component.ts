import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventCardObject } from '../../interfaces/EventCardSchema';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input('data') cardData: EventCardObject;
  @Output() actionButtonClicked = new EventEmitter<FormData>();

  constructor() { }

  ngOnInit() {
  }

  onActionClicked() {
    const formData = new FormData();
    this.cardData.events.forEach(eventObj => {
      // Object.entries(eventObj).forEach(([key, value]) => {
      //   formData.append(key, value);
      // });
    });
    this.actionButtonClicked.emit(formData);
  }

}
