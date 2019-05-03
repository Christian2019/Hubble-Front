import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  endpoint: string;

  constructor(private httpClient: HttpClient) {
    this.endpoint = 'http://localhost:4200/api/event';
  }

  create(rawPayload: FormGroup[]) {
    const payload = this.normalizePayload(rawPayload);
    return this.httpClient.post('http://localhost:4200/api/event', payload);
  }

  fetch() {

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
        district        : 'Bairro de teste',
        zipCode         : dateAndLocationForm.get('cep').value,
        complements     : dateAndLocationForm.get('additionalInfo').value,
        street          : dateAndLocationForm.get('street').value,
      },
    };
    console.log('Normalized: '+normalizedPayload);

    return normalizedPayload;
  }

}
