import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { ProductsService } from '../products/products.service';
@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {
  public totalItem:number=0;
  public productdata:any[]=[];
  constructor(private router: ActivatedRoute, private service: ProductsService,private route:Router,private cartService:CartService)
   { 
    this.cartService.getMed()
    .subscribe((res:any)=>{
    this.totalItem = res.length;
  })
   }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['_id'])
    this.service.getCurrent(this.router.snapshot.params['_id'])
      .subscribe((result: any) => {
       this.productdata.push(result)
        })
      }
      redirect(){
        this.route.navigate(['products'])
      }
  }


