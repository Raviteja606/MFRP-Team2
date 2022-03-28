import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public totalItem:number=0;
  constructor(private cartService:CartService) 
  { 
    this.cartService.getMed()
    .subscribe((res:any)=>{
    this.totalItem = res.length;
  })
  }

  ngOnInit(): void {
  }

}
