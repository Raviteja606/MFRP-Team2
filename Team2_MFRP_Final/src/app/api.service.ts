import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getMed(){
    return this.http.get<any>("http://localhost:4400/api/medproduct")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
