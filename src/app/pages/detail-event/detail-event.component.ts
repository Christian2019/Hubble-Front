import { HomeComponent } from './../home/home.component';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Observable } from 'rxjs';
import { EventsService } from './../../shared/services/events.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { User } from '../_models/user';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.scss']
})
export class DetailEventComponent implements OnInit {
 event: any;
 favorito: boolean = false;
 presenca: boolean = false;
 logado: boolean = false;
 currentUser: User;

 constructor(
    private eventService: EventsService,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.eventService.getById(this.route.snapshot.params['id'])
   .subscribe(teste => this.event = teste);
   this.authenticationService.currentUser.subscribe(user => {
    this.currentUser = user;
});


    if(this.currentUser !== null){
      this.logado = true;

      this.eventService.getFavoriteEvent(""+this.currentUser.id, this.route.snapshot.params['id'])
    .then(teste => this.favorito = teste);

      this.eventService.getConfirmedEvent(""+this.currentUser.id, this.route.snapshot.params['id'])
    .then(teste => this.presenca = teste);
    }
}

 favoritar() {
  if (this.favorito === false) {
    this.favorito = true;
    this.snackbar.open('Evento favoritado.' , 'ok',
   {duration: 5000});
  } else {
    this.favorito = false;
    this.snackbar.open('Evento excluido da lista de favoritos.' , 'ok',
   {duration: 5000});
  }
   this.eventService.favoriteEvent(""+this.currentUser.id, this.event.id);
 }

 confirmar() {
  if (this.presenca === false) {
    this.presenca = true;
  } else {
    this.presenca = false;
  }
   this.eventService.confirmEvent(""+this.currentUser.id, this.event.id);
 }
 deletar(id: string) {
   this.eventService.delete(this.event.id)
   .then(msg => console.log(msg));

   this.snackbar.open('Evento deletado com sucesso.' , 'ok',
  {duration: 5000});
 }
}
