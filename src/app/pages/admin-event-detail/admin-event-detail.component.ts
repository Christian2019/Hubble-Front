import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/shared/components/event';


@Component({
  selector: 'app-admin-event-detail',
  templateUrl: './admin-event-detail.component.html',
  styleUrls: ['./admin-event-detail.component.scss']
})
export class AdminEventDetailComponent implements OnInit {
  event: Event;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.httpClient.get<Event>('http://localhost:4200/api/event/' + id).subscribe(data => {
      this.event = data;
  });
    // http://localhost:3000/Event/status/Aprovado
  }

  allTags () {
    let aux = this.event.tag.map(n => "<a href=\"#\">"+n+"</a>");
    return aux;
  }

}
