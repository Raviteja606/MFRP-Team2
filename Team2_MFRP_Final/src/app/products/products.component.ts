import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { HttpClient } from '@angular/common/http';
import { data } from '../data';
import { Observable } from 'rxjs';
import { CartService } from '../cart/cart.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public totalItem: number=0;
  public filterCategory : any;
  searchKey:string ="";
  public response!: Observable<data[]>;
  public sample: any[] = [];
  data: any;
  ProductName: any;
  public searchTerm !: string;
  a: any;
alert:boolean=false;

  constructor(private service: ProductsService, private http: HttpClient,private cartService:CartService,private route:Router) {
    this.response = this.service.getMed();
    this.service.getMed().subscribe(data => {
      console.log(data)
      this.sample = data;
      this.filterCategory = data;
      this.sample.forEach((a:any)=>{
        Object.assign(a,{qnt:1,total:a.Price});
      });
    })
    console.log(this.sample)
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
 

  ngOnInit(): void {
    this.cartService.getMed()
    .subscribe((res:any)=>{
    this.totalItem = res.length;
  })
  }
   
  // search() {
  //   var a = (document.getElementById("search") as HTMLInputElement).value
  //   if (a == "") {
  //     this.service.getMed().subscribe(data => {
  //       console.log(data)
  //       this.sample = data;
  //     })
  //   }
  // }
  // Search(val: string) {
  //   console.warn(val);
  //   this.sample = [];
  //   this.service.getMed().subscribe((data: any) => {
  //     console.log(data);
  //     for (let i = 0; i < data.length; i++) {
  //       if (val == data[i].ProductName)
  //         this.service.getCurrent(data[i]._id).subscribe((result: any) => {
  //           console.warn(result);
  //           this.sample.push(result);
  //         })
          
  //   }
  //   })

  // }
  inc(prod: { qnt: any; }){
    // console.log(prod.qnt);
    if(prod.qnt !=5){
      prod.qnt += 1;
    }
    // prod.qnt = prod.qnt + 1;
  }
  dec(prod: { qnt: any; }){
    // console.log(prod.qnt);
    if(prod.qnt !=1){
      prod.qnt -=1;
    }
}
 addtocart(prod:any){
   this.cartService.addtoCart(prod)
   
 }
 filter(category:string){
  this.filterCategory = this.sample
  .filter((a:any)=>{
    if(a.category == category || category==''){
      return a;
    }
  })
}
search(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
  this.cartService.search.next(this.searchTerm);
}
}

