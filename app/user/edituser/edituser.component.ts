import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';


interface User {
  id?: number;
  title: string
}

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit{
  currentUser: User | undefined;
  editForm: FormGroup;
  
  
  constructor(
    private activeRoute: ActivatedRoute,
    private UserService: UserService,
    private formBuilder:FormBuilder
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
  ngOnInit(): void {
    let userId = parseInt(this.activeRoute.snapshot.paramMap.get('id'));
    this.currentUser = this.UserService.getUserById(userId);
    this.editForm = this.formBuilder.group({
      title: [this.currentUser.title]
    });
  }

  onSubmit() {
    const updatedUser: User = {
      id: this.currentUser?.id,
      title: this.editForm.controls['title'].value
    };
    this.UserService.updateUser(updatedUser);
    alert("User's title updated!");
    console.log('Form submitted:', this.editForm.value);
  }
}
