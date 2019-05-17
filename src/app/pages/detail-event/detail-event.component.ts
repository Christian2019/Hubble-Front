import { Observable } from 'rxjs';
import { EventsService } from './../../shared/services/events.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.scss']
})
export class DetailEventComponent implements OnInit {
 event: any;
  constructor(
    private eventService: EventsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.eventService.getById(this.route.snapshot.params['id'])
    .subscribe(teste => this.event = teste);
}
}
