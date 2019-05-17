import { DetailEventComponent } from './pages/detail-event/detail-event.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MatInputModule } from '@angular/material';
import { CreateEventControllerComponent } from './pages/create-event/controller/create-event.controller.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/presenter/sign-up.component';


const routes: Routes = [
  { path: '',             component: HomeComponent },
  { path: 'novo-evento', component: CreateEventControllerComponent },
  {path: 'event/:id', component: DetailEventComponent},
  {path: 'login', component: LoginComponent},
  {path: 'novo-usuario',  component  : SignUpComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes), MatInputModule],
  exports: [RouterModule, MatInputModule]
})
export class AppRoutingModule { }
