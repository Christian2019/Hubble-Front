import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {
  generalForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.generalForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  getErrorMessage() {

  }

}
