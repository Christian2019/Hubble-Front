import { Component, OnInit, NgModule } from '@angular/core';

export interface tabCategorias {
  name: string;
}

const CATEGORIES_DATA: tabCategorias[] = [
  {name: 'Teste'},
  {name: 'teste2'},
];


@Component({
  selector: 'app-register-event-type',
  templateUrl: './register-event-type.component.html',
  styleUrls: ['./register-event-type.component.scss']
})

export class RegisterEventTypeComponent implements OnInit {
  columnsToDisplay: string="Categorias";
  
  dataSource = CATEGORIES_DATA;

  // constructor(
  //   public categories: any = []
  // ) { }



  ngOnInit() {
  }

}
