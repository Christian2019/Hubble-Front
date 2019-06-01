import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './material-import';
import { SidenavComponent } from './shared/components/sidenav/presenter/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatSnackBarModule } from '@angular/material';
import { CreateEventComponent } from './pages/create-event/presenter/create-event.component';
import { SidenavControllerComponent } from './shared/components/sidenav/controller/sidenav.controller.component';
import { HomeComponent } from './pages/home/home.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { CreateEventControllerComponent } from './pages/create-event/controller/create-event.controller.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { EventsService } from './shared/services/events.service';
import { AuthService } from './shared/services/Authentication/auth.service';
import { DatePipe } from '@angular/common';
import { DetailEventComponent } from './pages/detail-event/detail-event.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { LoginComponent } from './pages/login/login.component';
import { EventListingComponent } from './shared/components/event-listing/presenter/event-listing.component';
import { TesteComponent } from './shared/teste/teste.component';
import { EventCardComponent } from './shared/components/event-card/event-card.component';
import { AdminEventDetailComponent } from './pages/admin-event-detail/admin-event-detail.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { EventAproveListComponent } from './pages/event-aprove-list/event-aprove-list.component';
registerLocaleData(localePt);

export const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 5,
  spaceBetween: 50,
  keyboard: false,
  observer: true,
  mousewheel: false,
  scrollbar: false,
  navigation: true,
  pagination: false,
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SidenavControllerComponent,
    CreateEventComponent,
    HomeComponent,
    CreateEventControllerComponent,
    DetailEventComponent,
    LoginComponent,
    SingUpComponent,
    LoginComponent,
    EventListingComponent,
    TesteComponent,
    EventCardComponent,
    AdminEventDetailComponent,
    EventAproveListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SwiperModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [
    EventsService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    AuthService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
