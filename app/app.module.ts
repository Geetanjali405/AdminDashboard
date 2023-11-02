import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphComponent } from './graph/graph.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProdcardsComponent } from './prodcards/prodcards.component';
import { UserComponent } from './user/user.component';
import { CreateComponent } from './create/create.component';
import { UsersComponent } from './users/users.component';
import { EditComponent } from './edit/edit.component';
import { ViewuserComponent } from './user/viewuser/viewuser.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { CreateuserComponent } from './user/createuser/createuser.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DashboardComponent,
    GraphComponent,
    NavBarComponent,
    SideBarComponent,
    LoginComponent,
    RegisterComponent,
    ProdcardsComponent,
    UserComponent,
    CreateComponent,
    UsersComponent,
    EditComponent,
    ViewuserComponent,
    EdituserComponent,
    CreateuserComponent,
    PagenotfoundComponent,
    CreateproductComponent,
    ViewproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
