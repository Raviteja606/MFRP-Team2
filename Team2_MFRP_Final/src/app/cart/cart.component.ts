import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog'
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public billingForm!:FormGroup
 public totalItem : number = 0;
 public products:any=[];
 public grandTotal !: number;
  constructor(public dialog: MatDialog ,private cartService:CartService, private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { 
    this.cartService.getMed()
    .subscribe((res:any)=>{
    this.totalItem = res.length;
  })
  }

  openDialog() {
    const dialogRef = this.dialog.open(CheckoutComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit():void {

    this.billingForm = this.formBuilder.group({
      Email:['']
    })

    this.cartService.getMed()
    .subscribe(res=>{
      this.totalItem = res.length;
    })


   this.cartService.getMed().subscribe(res=>{
     this.products=res;
     this.grandTotal = this.cartService.getTotalPrice();
   })
}
get formControls() {return this.billingForm.controls;}

billing(){
  this.http.get<any>("http://localhost:5000/api/user")
  .subscribe(res=>{
    const userv = res.find((a:any)=>{
      return a.Email === this.billingForm.value.Email 
    })
    if(userv){
      alert("Billing Successful!!");
      this.billingForm.reset();
      this.router.navigate(['home'])
    }else{
      alert("user not found");
    }
  },err=>{
    alert("Something went wrong!!")
  })
 }

removeItem(item:any){
  this.cartService.removeCartItem(item);
}
emptycart(){
  this.cartService.removeAllCart();
}
}
  

