import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

interface User {
  id?: number;
  title: string
}

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent {
  currentUser: User | undefined;
  constructor(
    private activeRoute: ActivatedRoute,
    private UserService: UserService
  ) {
    console.log(this.activeRoute);
    let UserId = this.activeRoute.snapshot.params['id'];
    this.activeRoute.params.subscribe((params) => {
      let UserIndex = this.UserService.users.findIndex(
        (u) => u.id == UserId
      );

      this.currentUser = this.UserService.users[UserIndex];
    });
  }
}
