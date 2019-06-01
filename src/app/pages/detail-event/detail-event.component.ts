import { HomeComponent } from './../home/home.component';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
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
 favorito: boolean = false;

 constructor(
    private eventService: EventsService,
    private route: ActivatedRoute,
    private serviceUser: AuthenticationService,
  ) { }

  ngOnInit() {
    this.eventService.getById(this.route.snapshot.params['id'])
   .subscribe(teste => this.event = teste);


    this.eventService.getFavoriteEvent(this.serviceUser.idUser, this.route.snapshot.params['id'])
    .then(teste => this.favorito = teste);
}

 favoritar() {
  if (this.favorito === false) {
    this.favorito = true;
  } else {
    this.favorito = false;
  }
   this.eventService.favoriteEvent(this.serviceUser.idUser, this.event.id);
 }
//  deletar(id: string) {
//    this.eventService.delete(this.event.id)
//    .then(msg => console.log(msg));
//  }
}
