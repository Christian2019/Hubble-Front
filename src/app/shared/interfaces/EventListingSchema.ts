import { ActionTypesEnum } from "../enums/ActionTypesEnum";
import { ActionButtonTextEnum } from "../enums/ActionButtonTextEnum";
import { EventCardObject } from '../components/event-listing/presenter/event-listing.component';

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
