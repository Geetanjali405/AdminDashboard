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
export class UsersComponent {
  // currentUser: object = {}
  // constructor(
  //   private activeRoute: ActivatedRoute,
  //   private UserService: UserService
  // ) {
  //   console.log(this.activeRoute);
  //   let UserId = this.activeRoute.snapshot.params['id'];
  //   this.activeRoute.params.subscribe((params) => {
  //     let UserIndex = this.UserService.user.findIndex(
  //       (u) => u.id == UserId
  //     );

  //     this.currentUser = this.UserService.user[UserIndex];
  //   });
  // }
  userData:Array<any>=[]
  constructor(public userService:UserService){
    this.userData=this.userService.users;
  }
  ngOnInit() {
    this.userData = this.userService.users;
  }

  // addUser(user:any){
  //   this.userService.addUser(user)
  // }
}
