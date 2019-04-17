import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MatInputModule } from '@angular/material';


const routes: Routes = [
  { path: '',      component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatInputModule],
  exports: [RouterModule, MatInputModule]
})
export class AppRoutingModule { }
