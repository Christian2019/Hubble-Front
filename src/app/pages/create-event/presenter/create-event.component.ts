import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-ui-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  generalForm         : FormGroup;
  dateAndLocationForm : FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.generalForm = this.formBuilder.group({
      title             : ['', Validators.required],
      description       : ['', Validators.required],
      price             : ['', Validators.required],
      maxNumberOfSeats  : ['', Validators.required],
      category          : ['', Validators.required],
      subjects          : ['', Validators.required],
      aditionalHours    : ['', Validators.required],
      organizers        : ['', Validators.required],
      subscriptionLink  : ['', Validators.required],
      headerImage       : ['', Validators.required],
    });

    this.dateAndLocationForm = this.formBuilder.group({
      street            : ['', Validators.required],
      number            : ['', Validators.required],
      additionInfo      : ['', Validators.required],
      cep               : ['', [Validators.required, Validators.maxLength(8)]],
      city              : ['', Validators.required],
      state             : ['', Validators.required],
      observation       : ['', [Validators.required, Validators.maxLength(140)]],
      initialDateTime   : ['', Validators.required],
      finalDateTime     : ['', Validators.required],
    });
  }

  getErrorMessage(){

  }





}
