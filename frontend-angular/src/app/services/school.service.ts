import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { School } from '../models/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  baseUrl = 'http://127.0.0.1:8000/api'
  constructor(private http: HttpClient) { }

  GetSchools(): Observable<School> {
    return this.http.get<School>(this.baseUrl + '/schools/');
  }

  selectSchool: School = new School();

  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  CreateSchool(school: School): Observable<School> {
    console.log(school);
    return this.http.post(this.baseUrl + '/schools/', school, { headers: this.reqHeader });
  }

  UpdateSchool(id: number, school: School) {
    return this.http.put(this.baseUrl + '/schools/' + id + '/', school, { headers: this.reqHeader });
  }

  DeleteSchool(id: number) {
    return this.http.delete(this.baseUrl + '/schools/' + id + '/');
  }
}
