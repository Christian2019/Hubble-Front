import { Component, OnInit, NgModule } from '@angular/core';
import { EventsService } from 'src/app/shared/services/events.service';
import { AppComponent } from 'src/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: []
})

export class HomeComponent implements OnInit {

  public searchTerm: string = "";
  public all_items: any = [];
  public items: any = [];
  public favorited_items: any = [];
  currentUser: User;
  

  constructor(private eventService: EventsService,
    private authService: AuthenticationService) {
      // pega usuário cadastrado
      this.authService.currentUser.subscribe(user => {
        this.currentUser = user;
    });
    //lista todos os eventos disponiveis
    const response = this.eventService.fetch();
    response.subscribe(
      items => this.setAllFilters(items),
      error => console.log(error)
    )
    this.items = this.all_items;

    if (this.currentUser !== null) {
      const response_favorite = this.eventService.fetch();
      response_favorite.subscribe(
        itens => this.favorited_items = itens,
        error => console.log(error)
      )
    }
   }


   setAllFilters(items) {
    this.all_items = items;
    this.items = this.all_items;
   }

   setFilteredItems(searchTerm) {
    this.items = this.doFilter(searchTerm);
  }

  doFilter(searchTerm) {
    return this.all_items.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  ngOnInit() {
  }

  public get authenticated(): boolean {
    return this.currentUser !== null;
  }
}
