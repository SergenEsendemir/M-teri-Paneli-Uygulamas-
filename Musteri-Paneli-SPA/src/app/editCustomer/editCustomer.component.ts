import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { HomeService } from '../services/Home.service';
import {Customer} from '../models/Customer'


import {first} from "rxjs/operators";
import { Route } from '@angular/compiler/src/core';
import { LiteralExpr } from '@angular/compiler';

@Component({
  selector: 'app-editCustomer',
  templateUrl: './editCustomer.component.html',
  styleUrls: ['./editCustomer.component.css']
})
export class EditCustomerComponent implements OnInit {

  constructor(private homeService:HomeService,
    private formBuilder:FormBuilder,private router:Router) { }

    editForm:FormGroup;
    customer:Customer;
    id:number;
    customerId:any
  ngOnInit() {
      let customerId=localStorage.getItem("editCustomerId");
      if(!customerId)
      {
        alert("Invalid Action.");
        this.router.navigateByUrl("home");
        return;
      }
      this.editForm=this.formBuilder.group({
        m_No:[],
        musteriAdi:["",Validators.required],
        musteriSoyadi:["",Validators.required],
        musteri_TC:["",[Validators.required, Validators.minLength(11),Validators.maxLength(11)]],
        musteri_Tel:["",[Validators.required, Validators.minLength(10),Validators.maxLength(11)]],
        musteri_Adres :["",Validators.maxLength(20)]
      });

      this.homeService.getCustomer(+customerId).subscribe(
        data=>{
          this.editForm.setValue(data);
        });
    }

    editCustomer(){
      this.homeService.EditCustomer(this.editForm.value)
      .pipe(first()).subscribe(
        data=>{
          this.router.navigateByUrl("home");
        },
        error => {
          alert(error);
        });
    }
}
