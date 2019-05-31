import { Component, OnInit } from '@angular/core';
import { EventListingObject } from '../components/event-listing/presenter/event-listing.component';
import { ActionButtonTextEnum } from '../enums/ActionButtonTextEnum';
import { ActionTypesEnum } from '../enums/ActionTypesEnum';
import { EventCardObject } from '../interfaces/EventCardSchema';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit {

  meuJson: EventListingObject = {
    header: "Meus eventos",
    subHeader: "Uma descrição para a página de meus eventos",
    tabs: [
      {
        title: "Eu vou",
        cards: {
          actionType: ActionTypesEnum.CANCEL_SUBSCRIPTION,
          buttonText: ActionButtonTextEnum.CONFIRMED_EVENTS,
          events: [
            {
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

  onEventCardSelected($eventCard: EventCardObject){
    console.log('Card que chegou: ',$eventCard);

  }

}
