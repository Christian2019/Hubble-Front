import { Categories } from './../register-event-type/register-event-type.component';
import { Address } from './../../shared/components/address';
import { Event } from './../../shared/components/event';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventsService } from 'src/app/shared/services/events.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  event: any;

  // categories = [
  //   { name: 'Palestra' },
  //   { name: 'Seminário' },
  //   { name: 'Oficina/Workshop' },
  //   { name: 'Congresso' },
  //   { name: 'Simpósio' },
  //   { name: 'Feira' },
  //   { name: 'Dissertação' },
  //   { name: 'Encontro' }
  // ];


  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService,
    private snackbar: MatSnackBar,
  ) { }

  formulario: FormGroup = new FormGroup({
    title:           new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    description:     new FormControl(null, [Validators.required]),
    price:           new FormControl('0.00', [Validators.required]),
    additionalHours: new FormControl('00:00', [Validators.required]),
    street:          new FormControl(null, [Validators.required]),
    cep:             new FormControl(null, [Validators.required]),
    additionalInfo:  new FormControl(null, [Validators.required]),
    district :       new FormControl(null, [Validators.required]),
    city:            new FormControl(null, [Validators.required]),
    state:           new FormControl(null, [Validators.required]),
    category:        new FormControl(null, [Validators.required])
  });

  ngOnInit() {
    this.eventService.getById(this.route.snapshot.params['id'])
      .subscribe(result => {
        this.populaForm(result);
        this.event = result;
      });
  }

  populaForm(event) {
    this.formulario.patchValue({
      title:           event.title,
      description:     event.description,
      price:           event.price,
      additionalHours: event.hours,
      street:          event.address.street,
      cep:             event.address.zipCode,
      additionalInfo:  event.address.complements,
      district:        event.address.district,
      city:            event.address.city,
      state:           event.address.state
      // category:        event.categories
    });
  }

  async onEdit(event) {
    await this.eventService.updateEvent(event._id, {
      title:        this.formulario.value.title,
      description:  this.formulario.value.description,
      price:        this.formulario.value.price,
      hours:        this.formulario.value.hours,
      // category: {
      //       title:  this.formulario.value.title
      // },
      address: {
        street:      this.formulario.value.street,
        zipCode:     this.formulario.value.cep,
        complements: this.formulario.value.additionalInfo,
        district:    this.formulario.value.district,
        city:        this.formulario.value.city,
        state:       this.formulario.value.state
      } as Address,
    } as Event);

    this.snackbar.open('Evento atualizado.', 'Ok',
      { duration: 5000 });
  }
}
