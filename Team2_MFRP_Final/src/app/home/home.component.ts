import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public totalItem:number=0
  public userdata:any[]=[];
  constructor(private router: ActivatedRoute,private service: UserService,private cartService:CartService)
   {
    this.cartService.getMed()
    .subscribe((res:any)=>{
    this.totalItem = res.length;
  })
    }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['_id'])
    this.service.getC(this.router.snapshot.params['_id'])
      .subscribe((result: any) => {
       this.userdata.push(result)
        })
  }

}
