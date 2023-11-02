import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userData:FormGroup

  constructor(private userService:UserService){
    this.userData=new FormGroup({
      'title':new FormControl(''),
      'email':new FormControl(''),
      'password':new FormControl('')
    })
  }
    createUser(){
      console.log(this.userData.value)
      this.userService.createUser(this.userData.value)
      alert("User updated!");
    }
  
 
  }

