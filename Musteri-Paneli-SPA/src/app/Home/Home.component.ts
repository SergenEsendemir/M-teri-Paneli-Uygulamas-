import { Component, OnInit } from '@angular/core';
import {Customer} from '../models/Customer';
import { HomeService } from '../services/Home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
  providers:[HomeService]
})
export class HomeComponent implements OnInit {

  constructor(private homeService:HomeService,private router: Router) { }
  
  customers:Customer[];

  ngOnInit() {
    this.homeService.getCustomers().subscribe(
      (data:Customer[])=>{
          this.customers=data
      } );
  }

  addCustomer():void{
    this.router.navigateByUrl("add");
  }

  deleteCustomer(customer:Customer) : void{
    this.homeService.deleteCustomer(customer.m_No)
    .subscribe( data => {
      this.customers = this.customers.filter(u => u !== customer);
    })
  }

  editCustomer(customer:Customer): void{
    localStorage.removeItem("editCustomerId");
    localStorage.setItem("editCustomerId", customer.m_No.toString());
    this.router.navigateByUrl("edit");
  }

  
  


}
