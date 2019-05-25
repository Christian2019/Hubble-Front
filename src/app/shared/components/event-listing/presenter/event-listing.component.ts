import { Component, OnInit, Input } from '@angular/core';
import { ActionTypesEnum } from 'src/app/shared/enums/ActionTypesEnum';
import { ActionButtonTextEnum } from 'src/app/shared/enums/ActionButtonTextEnum';

/**
 * @TODO Mover esta interface para um arquivo separado
 */
export interface EventListingObject {
  header: string,
  subHeader: string,
  tabs: [
    {
      title: string,
      cards: EventCardObject
    }
  ]
}

/**
 * @TODO Mover esta interface para um arquivo separado
 */
export interface EventCardObject {
  actionType: ActionTypesEnum,
  buttonText: ActionButtonTextEnum,
  events: [
    {
      title: string,
      description: string,
      tag: string,
      category: string,
      status: string,
      confirmedUsers: string,
      picture: string,
      startDate: string,
      endDate: string,
      price: string,
      hours: string,
      address: {
        street: string,
        complements: string,
        zipCode: string,
        district: string,
        city: string,
        state: string
      },
      createdBy: string,
      approvedBy: string,
      createdAt: string,
      updatedAt: string
    }
  ]
}

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.scss']
})

export class EventListingComponent implements OnInit {

  @Input('data') pageData: EventListingObject;

  constructor() { }

  ngOnInit() {
    console.log(this.pageData);
  }

  cardActionHandler($event: FormData){
    // this.processAction(eventoInterno.actionType)
  }

  processAction(action: string){
    // switch(action){
    //   case 'teste': break;
    // }
  }

}
