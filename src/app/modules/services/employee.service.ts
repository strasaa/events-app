import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../shared/employee';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly headers: HttpHeaders;
  private url = environment.apiEndpoint + '/Employees';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url, {headers: this.headers});
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.url + '/' + id, {headers: this.headers});
  }

  createEmployee(employee: Employee): Observable<Employee> {
    if (employee.id) {
      return this.http.put<Employee>(this.url + '/' + employee.id, employee);
    } else {
      return this.http.post<Employee>(this.url, employee);
    }
  }

  deleteEmployee(id: number): Observable<Employee> {
    if (id) {
      return this.http.delete<Employee>(this.url + '/' + id);
    }
  }
}
