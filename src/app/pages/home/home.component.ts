import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/shared/services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public searchTerm: string = "";
  public all_items: any = [];
  public items: any = [];

  constructor(private eventService: EventsService) {
    const response = this.eventService.fetch();
    response.subscribe(
      items => this.setAllFilters(items),
      error => console.log(error)
    )
    console.log(this.all_items);
    this.items = this.all_items;
   }
   setAllFilters(items) {
    this.all_items = items;
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
