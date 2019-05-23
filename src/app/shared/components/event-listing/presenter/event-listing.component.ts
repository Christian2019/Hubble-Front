import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.scss']
})
export class EventListingComponent implements OnInit {

  @Input('data') pageData: JSON;



  constructor() { }

  ngOnInit() {
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
