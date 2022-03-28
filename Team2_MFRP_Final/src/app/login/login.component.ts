import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   public loginForm!:FormGroup
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email:['',Validators.required],
      Pwd:['',Validators.required],
      role:['',Validators.required],
    })
  }
  get formControls() {return this.loginForm.controls;}
  login(){
    this.http.get<any>("http://localhost:5000/api/user")
    .subscribe(res=>{
      const userv = res.find((a:any)=>{
        return a.Email === this.loginForm.value.Email && a.Pwd === this.loginForm.value.Pwd && a.role === this.loginForm.value.role
      })
      if(userv && this.loginForm.value.role == 'admin'){
        alert("Login Successful!!");
        this.loginForm.reset();
        this.router.navigate(['admin'])
      }else if(userv && this.loginForm.value.role == 'user'){
        alert("Login Successful!!");
        this.loginForm.reset();
        this.router.navigate(['home'])
      }
      else{
        alert("user not found!!")
      }
    },err=>{
      alert("Something went wrong!!")
    })
   }
  }
  
