import { Injectable } from '@angular/core';

interface User {
  id: number;
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // [x: string]: any;
  users:Array<User>=[
    {
      id:1,
      title:"person 1"
    },
    {
      id:2,
      title:"person 2"
    },
    {
      id:3,
      title:"person 3"
    },
    {
      id:4,
      title:"person 4"
    },
    {
      id:5,
      title:"person 5"
    },
  ]
  constructor() { }
}
