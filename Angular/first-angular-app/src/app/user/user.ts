import { Component, computed, effect, Input, linkedSignal, signal } from '@angular/core';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input() avartar!: string;
  @Input() name!: string;
  @Input() id!: string;

  get imagePath() {
    return `assets/users/${this.avartar}`;
  }

  onSelectUser(user: { id: string; name: string; avatar: string; }) {
    console.log(user);
  } 
} 
