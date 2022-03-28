import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { user } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  subscribe:any;
  url1="http://localhost:5000/api/user"
 constructor(private http: HttpClient) { }
 public getUser(): Observable<user[]> {
   return this.http.get<user[]>('http://localhost:5000/api/user');
 }
 getC(_id: any) {
  return this.http.get(`${this.url1}/${_id}`)
}
}
