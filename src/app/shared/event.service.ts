import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { Event } from './event.model';

@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }

    list() {
    const headers = new HttpHeaders();
    // headers.append('Authorization', 'Basic ' + btoa('rpearcy' + ':' + 'evalpass'));
    headers.append('Content-Type', 'application/json');

    return this.http.get<Event>('http://dev.dragonflyathletics.com:1337/api/dfkey/events', {
      headers: {
        'Authorization': 'Basic ' + btoa('rpearcy' + ':' + 'evalpass')
      }
    })
      .toPromise()
      .then((res: Event) => {
        this.data = res;
        const allEvent = [];
        console.log(this.data);

        this.data.forEach((entry) => {
          const event = new Event();
          // console.log(event);
          event.name = entry.name;
          event.id = entry.id;
          event.description = entry.description;
          allEvent.push(event);
        });

        return allEvent;
      })
      .catch(this.handleError);
    }

    get(id: string) {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      console.log(id);

      return this.http.get<Event>('http://dev.dragonflyathletics.com:1337/api/dfkey/events/' + id + '/', {
        headers: {
          'Authorization': 'Basic ' + btoa('rpearcy' + ':' + 'evalpass')
        }
      })
        .toPromise()
        .then((res: Event) => {
          const data = res;
          const event = new Event();
          event.name = data.name;
          event.id = data.id;

          return event;
        })
        .catch(this.handleError);
    }

  private handleError (error: Response | any) {
    const errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
