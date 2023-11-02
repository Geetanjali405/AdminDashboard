import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
interface User {
  id: number;
  title: string
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userData:Array<any>=[]
  constructor(private userService:UserService){
  
  }
  ngOnInit():void {
    // this.userData = this.userService.users;
    console.error(this.userService.users);
    this.userData=this.userService.users;
    console.log(this.userService.users);
  }

}
