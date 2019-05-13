import { Component, OnInit, Input } from '@angular/core';
import { EventsService } from 'src/app/shared/services/events.service';
import { Event } from './EventJson/event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  //@Input() eventDetail: EventDetailComponent;
  varr = "5cc319e02f47619a17089bd5";
  jsonInf: Event;

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.eventService.getById(this.varr).subscribe((data: any) => this.jsonInf = data);
    
  }

}
