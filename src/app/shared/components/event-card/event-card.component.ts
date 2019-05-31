import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventCardObject } from '../../interfaces/EventCardSchema';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input('data') cardData: EventCardObject;
  @Output() actionButtonClicked = new EventEmitter<EventCardObject>();
  isOnTablet$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet)
  .pipe(
    map(result => result.matches)
  );
  isOnMobile$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

  onActionClicked() {
    this.actionButtonClicked.emit(this.cardData);
  }

}
