import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { User } from 'src/app/shared/components/user';
import { subscribeOn } from 'rxjs/operators';
import { EventsService } from 'src/app/shared/services/events.service';
import { element } from '@angular/core/src/render3';
import { Category } from 'src/app/shared/components/category';

@Component({
  selector: 'profile-event',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileViewComponent implements OnInit {
 user: any;
 categories: any;
 teste: string;

 private route: ActivatedRoute;
  constructor(private authService: AuthenticationService, private eventService: EventsService) {
    this.user = this.authService.currentUserValue;
    this.categories = this.eventService.getCategories()
      .subscribe(category => this.categories = category);
  }

  ngOnInit() {
  }
}
