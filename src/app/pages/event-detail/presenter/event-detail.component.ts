import { Component, OnInit, Input } from '@angular/core';
import { EventsService } from 'src/app/shared/services/events.service';

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
    // this.jsonInf = this.eventService.getById(this.varr);
    this.jsonInf = {
      address: {
          state: "SC",
          city: "Turvo",
          district: "sei la",
          zipCode: 128973012,
          complements: "complemento aqui",
          street: "essa rua",
          createdAt: "2019-04-26T14:46:56.248Z"
      },
      status: "Aprovado",
      tag: [],
      confirmedUsers: [],
      _id: "5cc319e02f47619a17089bd5",
      title: "evento puc",
      description: "este e'um evento oferecido pela puc",
      picture: "picture",
      price: 30,
      hours: "12",
      startDate: "1556290016248",
      endDate: "1556290016248",
      createdAt: "2019-05-10T23:39:43.026Z",
      updatedAt: "2019-05-10T23:39:43.026Z",
      id: "5cc319e02f47619a17089bd5"
  }
  }

}
