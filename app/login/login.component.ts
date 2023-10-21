import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData:Array<any>=[]
  constructor(public userService:UserService){
    this.userData=this.userService.users;
  }
}
