import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

// export interface tabCategorias {
//   name: string;
// }

// const CATEGORIES_DATA: tabCategorias[] = [
//   {name: 'Teste'},
//   {name: 'teste2'},
// ];


// @Component({
//   selector: 'app-register-event-type',
//   templateUrl: './register-event-type.component.html',
//   styleUrls: ['./register-event-type.component.scss']
// })




// export class RegisterEventTypeComponent implements OnInit {
//   eventTypeForm: FormGroup;
  
//   columnsToDisplay = ['name']

//   ngOnInit(): void {
//      this.eventTypeForm = new FormGroup({
//        name: new FormControl()
//       });
    
//   }
  
//   displayedColumns: string = "Categorias";
//   dataSource = CATEGORIES_DATA;

  
// }
 
export interface Categories {
  name: string;
  position: number;
  
}

const ELEMENT_DATA: Categories[] = [
  {position: 1, name: 'categoria1'},
  {position: 2, name: 'categoria2'},
  {position: 3, name: 'categoria3'},
  {position: 4, name: 'categoria4'},
  {position: 5, name: 'categoria5'},
  {position: 6, name: 'categoria6'},
  {position: 7, name: 'categoria7'},
];


@Component({
  selector: 'app-register-event-type',
  templateUrl: './register-event-type.component.html',
  styleUrls: ['./register-event-type.component.scss']
})

// this.eventTypeForm = new FormGroup({
//   firstName: new FormControl()
// });

export class RegisterEventTypeComponent {
  columnsToDisplay: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
}