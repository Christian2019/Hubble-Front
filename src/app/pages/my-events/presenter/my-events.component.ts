import { Component, OnInit } from '@angular/core';
import { EventListingObject } from 'src/app/shared/interfaces/EventListingSchema';
import { ActionTypesEnum } from 'src/app/shared/enums/ActionTypesEnum';
import { ActionButtonTextEnum } from 'src/app/shared/enums/ActionButtonTextEnum';
import { EventCardObject } from 'src/app/shared/interfaces/EventCardSchema';
import { EventCard } from 'src/app/shared/interfaces/EventCard';
import { EventsService } from 'src/app/shared/services/events.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { RouterOutlet, OutletContext, Router } from '@angular/router';
import { CreateEventComponent } from '../../create-event/presenter/create-event.component';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent implements OnInit {

  // meuJson: EventListingObject = {
  //   header: "Meus eventos",
  //   subHeader: "Uma descrição para a página de meus eventos",
  //   tabs: [
  //     {
  //       title: "Eu vou",
  //       cards: {
  //         events: [
  //           {
  //             actionType: ActionTypesEnum.CANCEL_SUBSCRIPTION,
  //             buttonText: ActionButtonTextEnum.CONFIRMED_EVENTS,
  //             id: "5ccbf4b5d582532357d9e436",
  //             title: "Seminário de UX",
  //             startDate: "13/04/2020",
  //             endDate: "13/04/2020",
  //             startHour: "16:00",
  //             endHour: "20:00",
  //             price: "34",
  //             address: {
  //               street: "Rua 123",
  //               number: 43,
  //               complements: "Um complemento",
  //               zipCode: "94321980",
  //               district: "Bairro de teste",
  //               city: "Porto Alegre",
  //               state: "RS"
  //             }
  //           },
  //           {
  //             actionType: ActionTypesEnum.VIEW_EVENT,
  //             buttonText: ActionButtonTextEnum.CREATED_BY_ME,
  //             id: "5ccbf4b5d582532357d9e436",
  //             title: "Palestra sobre Coach Quântico",
  //             startDate: "13/04/2020",
  //             endDate: "13/04/2020",
  //             startHour: "16:00",
  //             endHour: "20:00",
  //             price: "34",
  //             address: {
  //               street: "Rua 123",
  //               number: 71,
  //               complements: "Um complemento",
  //               zipCode: "94321980",
  //               district: "Bairro de teste",
  //               city: "Porto Alegre",
  //               state: "RS"
  //             }
  //           }
  //         ]
  //       }
  //     }
  //   ]
  // };

  pageData;

  constructor(private eventService: EventsService, private router: Router) { }

  async ngOnInit() {
    await this.buildListingComponent();
  }

  async buildListingComponent(){
    const data = {
      header: 'Meus eventos',
      subHeader:
        'Mantenha os eventos que você mais gosta sempre por perto. Gerencie eventos em que você '+
        'marcou presença, relembre daqueles em que você já foi, acesse seus eventos favoritos e monitore '+
        'aqueles criados por você.',
      tabs: [
        {
          title: 'Eu vou',
          cards: {}
        },
        {
          title: 'Eu fui',
          cards: {}
        },
        {
          title: 'Favoritos',
          cards: {}
        },
        {
          title: 'Criados por mim',
          cards: {}
        }
      ]
    }
    await this.getConfirmedEvents((events: EventCard)   => {data.tabs[0].cards['events'] = events});
    await this.getPastEvents((events: EventCard)        => {data.tabs[1].cards['events'] = events});
    await this.getFavoriteEvents((events: EventCard)    => {data.tabs[2].cards['events'] = events});
    await this.getEventsCreatedByMe((events: EventCard) => {data.tabs[3].cards['events'] = events});
    this.pageData = data;
    console.log(data);
  }

  getConfirmedEvents(callback): void {
    this.eventService.getParticipatedEvents()
      .then(
        (success: HttpResponse<Object>) => {callback(success['euFui']);},
        (rejected: HttpErrorResponse) => {'Erro: '+rejected.error}
      );
  }

  getPastEvents(callback): void {
    this.eventService.getParticipatedEvents()
      .then(
        (success: HttpResponse<Object>) => {callback(success['euVou']);},
        (rejected: HttpErrorResponse) => {'Erro: '+rejected.error}
      );
  }

  getFavoriteEvents(callback): void {
    this.eventService.getFavoriteEvents()
      .then(
        (success: any) => callback(success),
        (rejected: HttpErrorResponse) => console.log('Erro: ',rejected.error)
      );
  }

  getEventsCreatedByMe(callback): void {
    this.eventService.getCreatedEvents()
      .then(
        (success: HttpResponse<Object>) => callback(success),
        (rejected: HttpErrorResponse) => console.log('Erro: ',rejected.error)
      );
  }

  private formatEvent(events: any, actionType: ActionTypesEnum, actionButtonText: ActionButtonTextEnum) {
    const formattedEvents: EventCard[] = [];
    events.forEach(element => {
      formattedEvents.push(
        {
          id          : element._id,
          actionType  : actionType,
          buttonText  : actionButtonText,
          title       : element.title,
          startDate   : element.startDate,
          endDate     : element.endDate,
          startHour   : element.startHour,
          endHour     : element.endHour,
          price       : element.price,
          address     : {
            street      : element.address.street,
            number      : element.address.number,
            complements : element.address.complements,
            zipCode     : element.address.zipCode,
            district    : element.address.district,
            city        : element.address.city,
            state       : element.address.state
          }
        });
      return formattedEvents;
    });
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
    //   .then((success: HttpResponse<Object>) => {}
    //
  }

  private viewEvent(eventId: string){
    this.router.navigateByUrl('/event/'+eventId);
  }

}
