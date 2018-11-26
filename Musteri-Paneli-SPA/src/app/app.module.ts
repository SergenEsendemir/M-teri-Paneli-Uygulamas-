import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router'
import {appRoutes} from './routes'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './userLogin/userLogin.component';
import {AlertifyService} from './services/alertify.service';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './Home/Home.component';
import { AddCustomerComponent } from './addCustomer/addCustomer.component';
import { EditCustomerComponent } from './editCustomer/editCustomer.component';


@NgModule({
   declarations: [
      AppComponent,
      UserLoginComponent,
      RegisterComponent,
      HomeComponent,
      AddCustomerComponent,
      EditCustomerComponent
   ],
   imports: [
      BrowserModule,
      CommonModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
