import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckoutComponent } from './checkout/checkout.component';
import {MatDialog} from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminComponent } from './admin/admin.component';
import { FilterPipe } from './filter.pipe';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateComponent } from './update/update.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactusComponent,
    ProductsComponent,
    SignupComponent,
    CartComponent,
    ProductinfoComponent,
    CheckoutComponent,
    AdminComponent,
    FilterPipe,
    AddproductComponent,
    UpdateComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatDialogModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
