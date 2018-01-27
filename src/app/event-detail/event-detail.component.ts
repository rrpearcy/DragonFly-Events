import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Event } from '../shared/event.model';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-details',
  // moduleId: module.id.toString(),
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event = new Event();

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    // console.log(id);

    this.eventService.get(id)
      .then((event) => { this.event = event; });
  }

}
