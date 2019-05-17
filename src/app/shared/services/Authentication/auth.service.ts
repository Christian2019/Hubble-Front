import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // @TODO retornar a chamada do post com o endpoint e o payload
  signUp(form: FormGroup) {
    // return this.http.post('endpoint', 'payload')
  }
}
