import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class EventService {

    stringUrl: string = "INSERT A URL HERE";
    limit: '?_limit=5'; // limita quantos a gente vai pegar do json

    constructor(private http: HttpClient){}

    getJson () {
        return this.http.get<Event>(this.stringUrl);
    }

}
