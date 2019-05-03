import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public searchTerm: string = "";
  public all_items: any = [];
  public items: any = [];

  constructor() {
    this.all_items = [
      {tag:"Curso", title: "Curso de Ionic", text:"descricao do curso" },
      {tag:"Palestra", title: "Palestra em Ciencia de dados", text:"descricao do curso" },
      {tag:"Curso", title: "Curso de Docker", text:"descricao do curso" },
      {tag:"Curso", title: "Curso de React", text:"descricao do curso" },
      {tag:"Curso", title: "five", text:"descricao do curso" }
    ];
    this.items = this.all_items;
   }
   setFilteredItems(searchTerm) {
    this.items = this.doFilter(searchTerm);
  }

  doFilter(searchTerm) {
    return this.all_items.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  ngOnInit() {
  }

}
