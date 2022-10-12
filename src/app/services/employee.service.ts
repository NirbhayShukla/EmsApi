import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl=environment.apiBaseUrl+"Employees";

  private httpOptions ={
    headers : new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private client : HttpClient) { }

  getList():Observable<Employee[]>{
    return this.client.get<Employee[]>(this.apiUrl);
  }

  add(emp:Employee): Observable<Employee>{
    return this.client.post<Employee>(this.apiUrl,emp,this.httpOptions);
  }
}
