import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { data } from '../data';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public response!: Observable<data[]>;
  public sample: any[] = [];
  data: any;
  ProductName: any;
  a: any;
alert:boolean=false;

  constructor(private service: AdminService, private http: HttpClient) {
    this.response = this.service.getProduct();
    this.service.getProduct().subscribe(data => {
      console.log(data)
      this.sample = data;
    })
    console.log(this.response)
  }

  ngOnInit(): void {
  }
  deletemed(item: any) {
    console.warn(item)
    this.service.delete(item)
      .subscribe((result: any) => {
        console.warn(result)
        this.service.getProduct().subscribe(data => {
          console.log(data)
          this.sample = data;
        })

      })
  }

  search() {
    var a = (document.getElementById("search") as HTMLInputElement).value
    if (a == "") {
      this.service.getProduct().subscribe(data => {
        console.log(data)
        this.sample = data;
      })
    }
  }
  Search(val: string) {
    console.warn(val);
    this.sample = [];
    this.service.getProduct().subscribe((data: any) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        if (val == data[i].ProductName)
          this.service.getCurrent(data[i]._id).subscribe((result: any) => {
            console.warn(result);
            this.sample.push(result);
          })
          
    }
    })

  }
}
