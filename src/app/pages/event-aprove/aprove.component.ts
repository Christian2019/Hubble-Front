import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.hml';


@Component({
  selector: 'aprove-event',
  templateUrl: './aprove.component.html',
//   styleUrls: ['./edit-event.component.scss']
})
export class AproveEventComponent {
  event: any;

  url = environment.apiUrl


  constructor(
  ) { }

  
}
