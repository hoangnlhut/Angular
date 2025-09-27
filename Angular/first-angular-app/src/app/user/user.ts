import { Component, computed, effect, linkedSignal, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

  users = signal(DUMMY_USERS);

  // computedUsers = computed(() => this.users());
  // effectUsers = effect(() => this.users());
  // userCustomTheme = linkedSignal(() => this.users());
  
  getCorrectImagePath(avatar: string) {
    return 'assets/users/' + avatar;
  }


  // CAN't NOT USE THIS BECAUSE WE ARE NOW USING SIGNAL
  // get imagePath() {
  //   return this.imageBasePath;
  // }

  onSelectUser(user: { id: string; name: string; avatar: string; }) {
    alert('User selected!');
    console.log(user);
  } 
} 
