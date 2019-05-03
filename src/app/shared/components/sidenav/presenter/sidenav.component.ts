import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ui-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @ViewChild('drawer') drawer;
  @Input() opened: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  isTablet$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet)
  .pipe(
    map(result => result.matches)
  );

  constructor(private breakpointObserver: BreakpointObserver) {


  }

  /**
   * Opens/closes the sidenav
   */
  menuToggle() {
    this.drawer.toggle();
  }

}
