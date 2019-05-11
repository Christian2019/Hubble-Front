import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  @Output() emitFormData = new EventEmitter<FormGroup[]>();

  constructor(
  ) { }

  ngOnInit() {}


  onSubmit() {
    const formsData = [];
    const FormControls = Object.keys(this.profileForm.controls);

    FormControls.forEach(control => {
      formsData.push({
          controlName   : control,
          controlValue  : this.profileForm.get(control).value
      });
    });

    this.emitFormData.emit([this.profileForm]);
  }
}
