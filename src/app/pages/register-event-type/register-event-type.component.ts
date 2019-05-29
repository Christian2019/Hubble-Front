import { Component, OnInit, NgModule } from '@angular/core';
import { EventsService } from 'src/app/shared/services/events.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
 
export interface Categories {
  name: string;
  position: number;
  
}

// const ELEMENT_DATA: Categories[] = [
//   {position: 1, name: 'categoria1'},
//   {position: 2, name: 'categoria2'},
//   {position: 3, name: 'categoria3'},
//   {position: 4, name: 'categoria4'},
//   {position: 5, name: 'categoria5'},
//   {position: 6, name: 'categoria6'},
//   {position: 7, name: 'categoria7'},
// ];


@Component({
  selector: 'app-register-event-type',
  templateUrl: './register-event-type.component.html',
  styleUrls: ['./register-event-type.component.scss']
})



export class RegisterEventTypeComponent implements OnInit{
  categoryForm: FormGroup;

  public ELEMENT_DATA: any = [];

  constructor (
    private eventService: EventsService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder
    ){
        const response = this.eventService.get_categories();
        response.subscribe(
          items =>this.ELEMENT_DATA = items
        )
      }


  columnsToDisplay: string[] = ['position', 'name'];
  dataSource = this.ELEMENT_DATA;


  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      catName: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.categoryForm.invalid){
      return;
    }
    
    const formsData = [];
    const FormControls = Object.keys(this.categoryForm.controls);
    
    FormControls.forEach(control => {
      formsData.push({
        controlName: control,
        controlValue: this.categoryForm.get(control).value
      })
    })
    const response = this.eventService.createCategory(this.categoryForm);
    // console.log('chegou')
    response.subscribe(obj => this.snackBar.open("Cadastrado com sucesso","Ok",{duration:5000}));
  }
}