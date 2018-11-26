import { Injectable } from '@angular/core';
import { UserLogin } from '../models/userLogin';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';
import { UserRegister } from '../models/userRegister';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private alertifyService: AlertifyService,
    private router: Router
  ) { }
  path = "https://localhost:44342/api/Auth/";

  temp: any;
  login(userLogin: UserLogin) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient.post(this.path + "login", userLogin, { headers: headers })
      .subscribe(data => {
        this.temp = data;
        if (this.temp == 200) {
          this.alertifyService.success("Giriş Yapıldı.");
          this.router.navigateByUrl('/home');

        } else {
          this.alertifyService.warning("İşlem Başarısız.");
          this.router.navigateByUrl('/login');
        }

      });
  }

  register(userRegister: UserRegister) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient.post(this.path + "register", userRegister, { headers: headers })
      .subscribe(data=>{
          this.temp=data;
          if(this.temp==200){
            this.alertifyService.success("Kayıt olundu.");
            this.router.navigateByUrl('/login');
          }
          else if(this.temp==202){
            this.alertifyService.warning("Kullanıcı zaten var!");
            this.router.navigateByUrl('/register');
          }
          else{ 
            this.alertifyService.warning("İşlem Başarısız")
            this.router.navigateByUrl('/register');
        }

      });
  }


}
