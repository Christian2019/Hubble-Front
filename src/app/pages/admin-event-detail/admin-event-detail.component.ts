import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Event } from 'src/app/shared/components/event';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { User } from 'src/app/shared/components/user';
import { EventsService } from 'src/app/shared/services/events.service';


@Component({
  selector: 'app-admin-event-detail',
  templateUrl: './admin-event-detail.component.html',
  styleUrls: ['./admin-event-detail.component.scss']
})
export class AdminEventDetailComponent implements OnInit {
  event: Event;
  currentUser: User;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private eventService: EventsService,
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.httpClient.get<Event>('http://localhost:4200/api/event/' + id).subscribe(data => {
      this.event = data;
  });
    // http://localhost:3000/Event/status/Aprovado
  }

  allTags () {
    let aux = this.event.tag.map(n => "<a href=\"#\">"+n+"</a>");
    return aux;
  }

  confirmar() {
     this.eventService.AprovarEvent(this.event._id);
     this.router.navigate(['/'])
   }
}
