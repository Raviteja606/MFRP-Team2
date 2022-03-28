import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';

import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog'

import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

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
 
  //  openDialog() {
  //    const dialogRef = this.dialog.open(CheckoutComponent);
 
  //    dialogRef.afterClosed().subscribe(result => {
  //      console.log(`Dialog result: ${result}`);
  //    });
  //  }
 
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
      
       Swal.fire('Thank You..', 'Billing Successfull', 'success');
       this.billingForm.reset();
       this.router.navigate(['home'])
       this.cartService.removeAllCart();
       
      
     }else{
       Swal.fire('Oops', 'User not found', 'warning');
       this.router.navigate(['cart'])
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


function item(item: any) {
  throw new Error('Function not implemented.');
}
//  @Component({
//   selector: 'app-cart',
//   templateUrl: 'cart.component.html',
// })
// export class CartComponent {}
   
 
 
