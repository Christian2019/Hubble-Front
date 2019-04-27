import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.controller.component.html',
  styleUrls: ['./create-event.controller.component.scss']
})
export class CreateEventControllerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onFormSubmitted(){

  }
}
