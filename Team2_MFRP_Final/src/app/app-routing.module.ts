import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateComponent } from './update/update.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {path:"home",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path: 'productinfo/:_id',component:ProductinfoComponent},
  {path:"cart",component:CartComponent},
  {path:"admin",component:AdminComponent},
  {path:"update/:_id",component:UpdateComponent},
  {path:"addproduct",component:AddproductComponent},
  {path:"main",component:MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
