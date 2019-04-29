import { Component } from '@angular/core';
import { Adress } from 'src/adress'

@Component({
    selector: 'insert selector',
    templateUrl: 'insert template url',
    styleUrls: ['insert styling css']
})

export class Event {

    title: string;
    description: string;
    picture: string;
    price: number;
    adress: Adress;
    hours: number;


    constructor(private newTitle: string, 
        private newDescription: string,
        private newPicture: string,
        private newPrice: number,
        private newAdress: Adress,
        private newHours: number){

            this.title = newTitle;
            this.description = newDescription;
            this.picture = newPicture;
            this.price = newPrice;
            this.adress = newAdress;
            this.hours = newHours;
        }


}
