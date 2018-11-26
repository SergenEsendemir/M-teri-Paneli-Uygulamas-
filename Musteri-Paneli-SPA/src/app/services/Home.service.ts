import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';
import {Customer} from '../models/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

constructor( private httpClient: HttpClient,
  private alertifyService: AlertifyService,
  private router: Router) { }

  path = "https://localhost:44342/api/Home/";

  getCustomers():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.path+"get");
  }

temp:any;
  addCustomer(customer:Customer){
      let headers = new HttpHeaders();
      headers = headers.append("Content-Type", "application/json");
      this.httpClient.post(this.path + "add", customer, { headers: headers })
        .subscribe(data=>{
            this.temp=data;
            if(this.temp==200){
              this.alertifyService.success("Müşteri Eklendi.");
              this.router.navigateByUrl('/home');
            }
            else{ 
              this.alertifyService.warning("İşlem Başarısız")
              this.router.navigateByUrl('/add');
          }
  
        });
    }

    deleteCustomer(id:number){
        return this.httpClient.post(this.path+"delete",id);
    }

    EditCustomer(customer:Customer){
      return this.httpClient.post(this.path+"update",customer);
  }

  getCustomer(id:number){
    return this.httpClient.post<Customer>(this.path+"getCustomer",id);
  }

    


  }
