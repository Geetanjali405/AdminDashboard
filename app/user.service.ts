import { Injectable } from '@angular/core';

interface User {
  id: number;
  title: string;
  password?:string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<User> = [];

  localStorageKey: string = "user_data";

  constructor() {
     this.loadUsersFromLocalStorage(); 
  }

  private loadUsersFromLocalStorage() {
    let userData = localStorage.getItem(this.localStorageKey); 
    if (userData) { 
      this.users = JSON.parse(userData); 
    } else { 
      this.users = []; 
    }
  }

  createUser(user:User) {
    user.id = this.users.length + 1;
    this.users.push(user); 
    this.saveUsersToLocalStorage();
  }

  getUsers(): User[] { 
    return this.users; 
  }

  getUserById(id: number): User {
    return this.users.find(user => user.id === id);
  }

  updateUser(user: User|any) {
    let index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
      this.saveUsersToLocalStorage();
    }
  }

  private saveUsersToLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.users));
  }
}