import { Component, OnInit } from '@angular/core';
import { EventListingObject } from 'src/app/shared/interfaces/EventListingSchema';
import { ActionTypesEnum } from 'src/app/shared/enums/ActionTypesEnum';
import { ActionButtonTextEnum } from 'src/app/shared/enums/ActionButtonTextEnum';
import { EventCardObject } from 'src/app/shared/interfaces/EventCardSchema';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/shared/services/events.service';

@Component({
  selector: 'app-event-aprove-list',
  templateUrl: './event-aprove-list.component.html',
  styleUrls: ['./event-aprove-list.component.scss']
})
export class EventAproveListComponent implements OnInit {
  meuJson: EventListingObject = {
    header: "Validar eventos",
    subHeader: "Uma descrição para a página de validar eventos",
    tabs: [
      {
        title: "Para aprovar",
        cards: {
          events: [
            {
              actionType: ActionTypesEnum.CANCEL_SUBSCRIPTION,
              buttonText: ActionButtonTextEnum.TO_APPROVE ,
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
            }
          ]
        }
      }
    ]
  };  
  constructor(private eventService: EventsService,
    private router: Router,) {
    const response = this.eventService.fetch_pending();
    response.subscribe(
      items => this.meuJson.tabs[0].cards.events = this.injectButton(items),
      error => console.log(error)
    )
   }

  ngOnInit() {
  }

  injectButton($itens) {
    $itens.forEach(event => {
      event.buttonText = ActionButtonTextEnum.TO_APPROVE
    });
    return $itens
  }


  onEventCardSelected($eventCard: EventCardObject){
    console.log('Card que chegou: ',$eventCard['id']);
    this.router.navigate(['admin/detalhe-evento/'+$eventCard['id']])
  }
}
