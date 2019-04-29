import { Component, OnInit } from '@angular/core';
import { Event } from '../src/event';
import { Adress } from './adress';
import { EventService } from './event.service';

@Component({
    selector: 'insert selector',
    templateUrl: 'insert template url',
    styleUrls: ['insert styling css']
})

export class EventComponent implements OnInit {

    events: Event[];

    constructor(private eventService: EventService){ }

    ngOnInit() {
        this.eventService.getJson().subscribe(thisEvent => {
            //this.events = thisEvent; ta dando erro e n sei pq
            // igual ao meu dia a dia
        })
    }


}
