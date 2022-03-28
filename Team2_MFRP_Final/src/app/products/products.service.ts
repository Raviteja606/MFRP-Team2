import { Injectable } from '@angular/core';
import { data } from '../data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
   subscribe:any;
   url1="http://localhost:4400/api/medproduct"
  constructor(private http: HttpClient) { }
  public getMed(): Observable<data[]> {
    return this.http.get<data[]>('http://localhost:4400/api/medproduct');
  }
  getCurrent(_id: any) {
    return this.http.get(`${this.url1}/${_id}`)
  }
}
