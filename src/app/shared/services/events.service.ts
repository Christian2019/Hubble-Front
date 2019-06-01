import { Event } from './../components/event';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { Category } from '../components/category';
import { User } from 'src/app/pages/_models/user';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  teste: any;
  endpoint: string;

  constructor(private httpClient: HttpClient) {
    this.endpoint = environment.apiUrl + 'event';
    console.log(environment.apiUrl)
  }

  create(rawPayload: FormGroup[]) {
    const payload = this.normalizePayload(rawPayload);
    return this.httpClient.post(environment.apiUrl + 'event', payload);
  }

  create_user(rawPayload: FormGroup[]) {
    const payload = this.normalizeUserPayload(rawPayload);
    return this.httpClient.post(environment.apiUrl + 'user', payload);
  }

  fetch() {
    return this.httpClient.get(environment.apiUrl + 'event');
  }

  private normalizePayload(rawPayload: FormGroup[]){
    const generalForm         = rawPayload[0];
    const dateAndLocationForm = rawPayload[1];
    console.log('Typo: '+typeof(+generalForm.get('additionalHours').value));

    const normalizedPayload   = {
      title             : generalForm.get('title').value,
      description       : generalForm.get('description').value,
      price             : generalForm.get('price').value,
      hours             : parseInt(generalForm.get('additionalHours').value),
      address           : {
        state           : dateAndLocationForm.get('state').value,
        city            : dateAndLocationForm.get('city').value,
        district        : dateAndLocationForm.get('district').value,
        zipCode         : dateAndLocationForm.get('cep').value,
        complements     : dateAndLocationForm.get('additionalInfo').value,
        street          : dateAndLocationForm.get('street').value,
      },
    };
    console.log('Normalized: '+normalizedPayload);
    return normalizedPayload;
  }

getById(id: string): Observable<Event> {
  return this.httpClient.get<Event>(environment.apiUrl + 'event/' + id);
}

getCategories(): Observable<Category[]> {
  return this.httpClient.get<Category[]>(environment.apiUrl + 'category');
}

getCategoriesFromUser(id: String): Observable<Category[]> {
  return this.httpClient.get<Category[]>(environment.apiUrl + 'category');
}

removeCategory(idCategory: string, idUser: string): any {
  console.log(JSON.stringify({"idCategoria":idCategory}))
  console.log(environment.apiUrl + "user/updateCategoria/" + idUser)
  return this.httpClient.post<User>(environment.apiUrl + "user/updateCategoria/" + idUser, {"idCategoria" : idCategory});
}

  private normalizeUserPayload(rawPayload: FormGroup[]){
    const generalForm         = rawPayload[0];
    const normalizedPayload   = {
      firstName         : generalForm.get('firstName').value,
      lastName          : generalForm.get('lastName').value,
      email             : generalForm.get('email').value,
      password          : generalForm.get('password').value
    };

    console.log(normalizedPayload);
    return normalizedPayload;
  }

}
