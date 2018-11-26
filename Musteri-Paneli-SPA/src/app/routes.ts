import { UserLoginComponent } from "./userLogin/userLogin.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./Home/Home.component";
import { AddCustomerComponent } from "./addCustomer/addCustomer.component";
import { EditCustomerComponent } from "./editCustomer/editCustomer.component";
import {Routes} from "@angular/router"

export const appRoutes:Routes= [
    { path: "login", component : UserLoginComponent},
    { path: "register", component : RegisterComponent},
    { path: "home", component : HomeComponent},
    { path: "add", component : AddCustomerComponent},
    { path: "edit", component : EditCustomerComponent},
    { path: "**", redirectTo:"login",pathMatch:"full" }
]
