import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

public cartitemList:any=[]
public sample = new BehaviorSubject<any>([]);
public search = new BehaviorSubject<string>("");
  constructor() { }
  getMed(){
   return this.sample.asObservable();
  }
  addtoCart(product:any){
     this.cartitemList.push(product);
     this.sample.next(this.cartitemList);
     this.getTotalPrice();
     console.log(this.cartitemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartitemList.map((a:any)=>{
      grandTotal += a.Price*a.qnt
    })
    return grandTotal;
  }
  removeCartItem(product:any){
    this.cartitemList.map((a:any,index:any)=>{
    if(product._id===a._id){
      this.cartitemList.splice(index,1)
    }
    })
    this.sample.next(this.cartitemList)
  }
  removeAllCart(){
    this.cartitemList=[]
    this.sample.next(this.cartitemList)
  }
}
