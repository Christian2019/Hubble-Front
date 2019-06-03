import { Component, OnInit } from '@angular/core';
import { EventListingObject } from 'src/app/shared/interfaces/EventListingSchema';
import { ActionTypesEnum } from 'src/app/shared/enums/ActionTypesEnum';
import { ActionButtonTextEnum } from 'src/app/shared/enums/ActionButtonTextEnum';
import { EventCardObject } from 'src/app/shared/interfaces/EventCardSchema';
import { EventCard } from 'src/app/shared/interfaces/EventCard';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent implements OnInit {

  meuJson: EventListingObject = {
    header: "Meus eventos",
    subHeader: "Uma descrição para a página de meus eventos",
    tabs: [
      {
        title: "Eu vou",
        cards: {
          events: [
            {
              actionType: ActionTypesEnum.CANCEL_SUBSCRIPTION,
              buttonText: ActionButtonTextEnum.CONFIRMED_EVENTS,
              id: "a23123ljur8kladkiknfjaksndj3",
              title: "Seminário de UX",
              description: "Esta é uma descrição de um evento",
              tag: "UX",
              category: "Seminário",
              status: "Aprovado",
              confirmedUsers: "lalala",
              picture: "lalala",
              startDate: "13/04/2020",
              endDate: "13/04/2020",
              price: "34",
              hours: "0",
              address: {
                street: "Rua 123",
                number: 43,
                complements: "Um complemento",
                zipCode: "94321980",
                district: "Bairro de teste",
                city: "Porto Alegre",
                state: "RS"
              },
              createdBy: "d923jo54lo1223l093",
              approvedBy: "k834120lk94240kk432",
              createdAt: "14/04/2019",
              updatedAt: ""
            },
            {
              actionType: ActionTypesEnum.CANCEL_SUBSCRIPTION,
              buttonText: ActionButtonTextEnum.CONFIRMED_EVENTS,
              id: "a23123ljur8kladkiknfjaksndj3",
              title: "Palestra sobre Coach Quântico",
              description: "Esta é uma descrição de um evento",
              tag: "UX",
              category: "Seminário",
              status: "Aprovado",
              confirmedUsers: "lalala",
              picture: "lalala",
              startDate: "13/04/2020",
              endDate: "13/04/2020",
              price: "34",
              hours: "0",
              address: {
                street: "Rua 123",
                number: 71,
                complements: "Um complemento",
                zipCode: "94321980",
                district: "Bairro de teste",
                city: "Porto Alegre",
                state: "RS"
              },
              createdBy: "d923jo54lo1223l093",
              approvedBy: "k834120lk94240kk432",
              createdAt: "14/04/2019",
              updatedAt: ""
            }
          ]
        }
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }



  onEventCardSelected($eventCard: EventCard){
    console.log('Card que chegou: ',$eventCard);
    switch($eventCard.actionType) {
      case 'cancel-subscription':
        this.cancelSubscription($eventCard.id);
        break;
      case 'remove-fav-event':
        this.removeFromFavorites($eventCard.id);
        break;
      default:
        this.viewEvent($eventCard.id);
        break;
    }

  }

  private cancelSubscription(eventId: string){

  }

  private removeFromFavorites(eventId: string){

  }

  private viewEvent(eventId: string){

  }

}
