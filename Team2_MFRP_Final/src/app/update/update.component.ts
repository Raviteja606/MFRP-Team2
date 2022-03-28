import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { data } from '../data';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../admin/admin.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public response!: Observable<data[]>;
  alert: boolean = false;
  editForm = new FormGroup({
    _id: new FormControl(''),
    ProductId: new FormControl(''),
    ProductName: new FormControl(''),
    Img:new FormControl(''),
    Brand: new FormControl(''),
    Drug: new FormControl(''),
    Price: new FormControl(''),
    ManufacturingDate: new FormControl(''),
    ExpiryDate: new FormControl(''),
    qnt: new FormControl(''),
    description:new FormControl(''),
    category:new FormControl(''),
  })
  constructor(private router: ActivatedRoute, private service: AdminService,private route:Router) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['_id'])
    this.service.getCurrent(this.router.snapshot.params['_id'])
      .subscribe((result: any) => {
        this.editForm = new FormGroup({
          _id: new FormControl(result['_id']),
          ProductId: new FormControl(result['ProductId']),
          ProductName: new FormControl(result['ProductName']),
          Img: new FormControl(result['Img']),
          Brand: new FormControl(result['Brand']),
          Drug: new FormControl(result['Drug']),
          Price: new FormControl(result['Price']),
          ManufacturingDate: new FormControl(result['ManufacturingDate']),
          ExpiryDate: new FormControl(result['ExpiryDate']),
          qnt: new FormControl(result['qnt']),
          description: new FormControl(result['description']),
          category: new FormControl(result['category']),
        })
        console.warn(result)
      })
  }
  update() {
    console.warn(this.editForm.value);
    this.service.updatedata(this.router.snapshot.params['_id'], this.editForm.value).subscribe(
      (result) => { console.warn(result) })
    this.alert = true;
    this.route.navigate(['admin'])
  }

}

