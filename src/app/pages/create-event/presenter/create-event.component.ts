import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatStepper, MatStep } from '@angular/material';


@Component({
  selector: 'app-ui-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {


  isLinear                                      = false;
  generalForm                                   : FormGroup;
  dateAndLocationForm                           : FormGroup;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  isTablet$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet)
  .pipe(
    map(result => result.matches)
  );

  constructor(private formBuilder: FormBuilder, private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.generalForm = this.formBuilder.group({
      title             : ['', Validators.required],
      description       : ['', Validators.required],
      price             : ['', Validators.required],
      maxNumberOfSeats  : ['', Validators.required],
      category          : ['', Validators.required],
      subjects          : ['', Validators.required],
      additionalHours   : ['', Validators.required],
      subscriptionLink  : ['', Validators.required],
      headerImage       : ['', Validators.required],
    });

    this.dateAndLocationForm = this.formBuilder.group({
      street            : ['', Validators.required],
      number            : ['', Validators.required],
      additionalInfo    : ['', Validators.required],
      cep               : ['', [Validators.required, Validators.maxLength(8)]],
      city              : ['', Validators.required],
      state             : ['', Validators.required],
      observation       : ['', [Validators.required, Validators.maxLength(140)]],
      startDate         : ['', Validators.required],
      startHour         : ['', Validators.required],
      endDate           : ['', Validators.required],
      endHour           : ['', Validators.required]
    });
  }

  getErrorMessage(){

  }

  onFileSelected() {
    console.log("ARQUIVO SENDO CAPTURADO");

  }





}
