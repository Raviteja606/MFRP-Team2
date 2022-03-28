import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from '../confirm-password.validator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   
  public signupForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }
  isSubmitted= false;
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      Firstname:['',[Validators.required,Validators.minLength(5),Validators.maxLength(30),Validators.pattern(/^[a-zA-Z ]*$/)]],
      Lastname:['',[Validators.required,Validators.minLength(5),Validators.maxLength(30),Validators.pattern(/^[a-zA-Z ]*$/)]],
      Email:['',Validators.required],
      dob:['',Validators.required],
      contactno:['',[Validators.required,Validators.pattern(/^[0-9]*$/),Validators.minLength(10),Validators.maxLength(10),]],
      Pwd:['',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/)]],
      cnfPwd:['',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/)]],
      role:['',Validators.required],
      validator: ConfirmPasswordValidator("Pwd", "cnfPwd")
    })
  }
  get formControls() {return this.signupForm.controls;}
signup(){
   this.http.post<any>("http://localhost:5000/api/user",this.signupForm.value)
   .subscribe(res=>{
     alert("Signup Successful!!");
     this.signupForm.reset();
     this.router.navigate(['login']);
   },err=>{
     alert("Something went wrong")
   })
}
}
