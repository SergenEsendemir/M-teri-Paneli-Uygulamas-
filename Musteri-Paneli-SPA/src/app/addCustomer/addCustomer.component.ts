import { Component, OnInit } from '@angular/core';
import { FormBuilder,
    FormGroup,
    Validators,
    FormControl } from '@angular/forms';
import { HomeService } from '../services/Home.service';

@Component({
  selector: 'app-addCustomer',
  templateUrl: './addCustomer.component.html',
  styleUrls: ['./addCustomer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private homeService:HomeService,
    private formBuilder:FormBuilder) { }

    addCustomerForm:FormGroup;
    customer:any={}

  ngOnInit() {
    this.CreateaddCustomerForm();
  }
  CreateaddCustomerForm(){
    this.addCustomerForm=this.formBuilder.group({
      musteriAdi:["",Validators.required],
      musteriSoyadi:["",Validators.required],
      musteri_TC:["",[Validators.required, Validators.minLength(11),Validators.maxLength(11)]],
      musteri_Tel:["",[Validators.required, Validators.minLength(10),Validators.maxLength(11)]],
      musteri_Adres :["",Validators.maxLength(20)]
    })
  }
  addCustomer(){
    this.addCustomerForm.valid
    {
      this.customer=Object.assign({},this.addCustomerForm.value);
      this.homeService.addCustomer(this.customer);
    };
  }

}
