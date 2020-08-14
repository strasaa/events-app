import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {CalendarEvent} from '../shared/calendarEvent';

@Injectable({
  providedIn: 'root'
})
export class CalendarEventService {

  private readonly headers: HttpHeaders;
  private url = environment.apiEndpoint + '/CalendarEvents/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  getAllEventsByEmployeeId(start: string, end: string, id: number): Observable<CalendarEvent[]> {
    return this.http.get<CalendarEvent[]>(this.url + 'GetAllBetweenByEmployeeId/' + start + '/' + end + '/' + id,
      {headers: this.headers});
  }
}
