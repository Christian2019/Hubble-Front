import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { User } from 'src/app/shared/components/user';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'profile-event',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileViewComponent implements OnInit {
 user: any;
//  private authService: AuthenticationService;
 private route: ActivatedRoute;
  constructor(private authService: AuthenticationService) {
    this.user = this.authService.currentUserValue;
  }

  ngOnInit() {
  }
}
