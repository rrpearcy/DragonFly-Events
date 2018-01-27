import {Component, OnInit} from '@angular/core';

import { Event } from '../shared/event.model';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-list',
  moduleId: module.id.toString(),
  templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit {
  event: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.list()
      .then((event) => {
        this.event = event;
      });
  }
}
