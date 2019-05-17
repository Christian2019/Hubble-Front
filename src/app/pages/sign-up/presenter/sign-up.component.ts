import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/Authentication/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  hide      : Boolean = true;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      email                 : [null, [Validators.required, Validators.email]],
      name                  : [null, [Validators.required]],
      password              : [null, [Validators.required]],
      passwordConfirmation  : [null, [Validators.required]],
    });
  }

  getErrorMessage(){

  }

  onSignUp(){
    this.authService.signUp(this.signUpForm);
  }

}
