import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from '../data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = "http://localhost:4400/api/deleteMedproduct"
  url1 = "http://localhost:4400/api/medproduct"
  url2 = "http://localhost:4400/api/updateMedproduct"
  subscribe: any;
  constructor(private http: HttpClient) { }

  public getProduct(): Observable<data[]> {
    return this.http.get<data[]>('http://localhost:4400/api/medproduct');
  }
  delete(_id: any) {
    return this.http.delete(`${this.url}/${_id}`)
  }
  getCurrent(_id: any) {
    return this.http.get(`${this.url1}/${_id}`)
  }
  updatedata(_id: any, data: {}) {
    return this.http.put(`${this.url2}/${_id}`, data)
  }
}
