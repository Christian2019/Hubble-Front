import { Component, OnInit } from '@angular/core';
import { EventListingObject } from 'src/app/shared/interfaces/EventListingSchema';
import { ActionTypesEnum } from 'src/app/shared/enums/ActionTypesEnum';
import { ActionButtonTextEnum } from 'src/app/shared/enums/ActionButtonTextEnum';
import { EventCardObject } from 'src/app/shared/interfaces/EventCardSchema';
import { EventCard } from 'src/app/shared/interfaces/EventCard';
import { EventsService } from 'src/app/shared/services/events.service';
import { HttpResponse } from '@angular/common/http';
import { RouterOutlet, OutletContext, Router } from '@angular/router';

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
              id: "5ccbf4b5d582532357d9e436",
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
              actionType: ActionTypesEnum.VIEW_EVENT,
              buttonText: ActionButtonTextEnum.CREATED_BY_ME,
              id: "5ccbf4b5d582532357d9e436",
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

  constructor(private eventService: EventsService, private router: Router) { }

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
    // this.eventService.cancelSubscription(eventId)
    //   .then(
    //     (success: HttpResponse<Object>)=> {

    //     });
  }

  private removeFromFavorites(eventId: string){
    // this.eventService.removeFromFavorites(eventId)
    //   .then(
    //     (success: HttpResponse<Object>) => {

    //     }
    //   );
  }

  private viewEvent(eventId: string){
    this.router.navigateByUrl('/event/'+eventId);
  }

}
