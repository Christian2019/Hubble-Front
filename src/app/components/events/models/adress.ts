import { Component } from '@angular/core';

@Component({
    selector: 'insert selector',
    templateUrl: 'insert template url',
    styleUrls: ['insert styling css']
})

export class Adress {

    state: string;
    city: string;
    district: string;
    zipCode: number;
    complements: string; // tá setado como string no json, n seria melhor como number?
    street: string;

    constructor(
        private newState: string,
        private newCity: string,
        private newDistrict: string,
        private newZipCode: number,
        private newComplements: string,
        private newStreet: string
    ){
        this.state = newState;
        this.city = newCity;
        this.district = newDistrict;
        this.zipCode = newZipCode;
        this.complements = newComplements;
        this.street = newStreet;
    }


}
