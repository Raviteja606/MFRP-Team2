import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AdminService } from '../admin/admin.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  public sample: any[] = [];
  constructor(private service: AdminService, private http: HttpClient,private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(data: any) {
    this.http.post('http://localhost:4400/api/medproduct', data)
      .subscribe((result) => {
        console.warn("result", result)
        this.service.getProduct().subscribe(data => {
          console.log(data)
          this.sample = data;
        })

      })
      Swal.fire({
        title: 'Success',
        text: 'Product Added',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Yes, go to menu.',
        cancelButtonText: 'No, let me add more products',
      }).then((result) => {
        if (result.value) {
          this.route.navigate(['/admin'])
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          this.route.navigate(['/addproduct'])
        }
      });
  }
  
}

