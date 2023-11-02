import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProdcardsComponent } from './prodcards/prodcards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { ViewuserComponent } from './user/viewuser/viewuser.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { CreateuserComponent } from './user/createuser/createuser.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
const routes: Routes = [
  {path:"",component:DashboardComponent

  },
  {
    path:"dashboard",
    component:DashboardComponent,
    children:[
      {path:"",component:DashboardComponent}
    ]
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"products",
    component: ProdcardsComponent,
    
  },

  {
    path: "products/Create",
    component: CreateproductComponent,
    
  },
  {
    path: "product/:id",
    component: ViewproductComponent
 
  },
  {
    path:"user",
    component:UserComponent,
    children: [
      {path: "", component: UsersComponent},
      {path: "Edit", component: EdituserComponent},
      { path: "Create", component: CreateuserComponent },
      {path: ":id", component: ViewuserComponent},
      {path: ":id/Edit", component: EdituserComponent},
     
      
      
    ]
  },
  // {
  //   path: '**', 
  //   component:DashboardComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
