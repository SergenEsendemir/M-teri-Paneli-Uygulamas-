import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder,
  FormGroup,
  Validators,
  FormControl } from '@angular/forms';


@Component({
  selector: 'app-userLogin',
  templateUrl: './userLogin.component.html',
  styleUrls: ['./userLogin.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private formBuilder:FormBuilder
    ) { }

  loginForm:FormGroup;
  userLogin:any={}
  ngOnInit() {
      this.CreateloginForm();
  }

  CreateloginForm(){
    this.loginForm=this.formBuilder.group({
      userName:["",Validators.required],
      password:["",[Validators.required,
      Validators.minLength(4),
      Validators.maxLength(8)]]
    });
  }

  login(){
    this.loginForm.valid
    {
      this.userLogin=Object.assign({},this.loginForm.value);
      this.authService.login(this.userLogin);
    };
    
  }

  
  
}

