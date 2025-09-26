import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

  users = DUMMY_USERS;

  // private imageBasePath = 'assets/users/';

  // set imagePath(path: string) {
  //   this.imageBasePath += path;
  // }
  // get imagePath() {
  //   return this.imageBasePath;
  // }

  onSelectUser(user: { id: string; name: string; avatar: string; }) {
    alert('User selected!');
    console.log(user);
  } 
} 
