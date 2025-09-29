import { Component, computed, effect, input, Input, linkedSignal, signal } from '@angular/core';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  // OLD WAY (not recommended) using @INPUT DECORATOR property
  // but this way , you can update the value of input property inside this component
  @Input({required: true}) avartar!: string;  
  @Input({required: true}) name!: string;
  @Input({required: true}) id!: string;

  get imagePath() {
    return `assets/users/${this.avartar}`;
  }

  onSelectUser(user: { id: string; name: string; avatar: string; }) {
      
  } 

  /* NEW WAY (recommended) using SIGNAL and INPUT FUNCTION

  // --> it will you change detection base Singal on Angular (ADVANTAEGE)
  // NOTE: input() function is READ-ONLY, so we cannot change its value inside this component
  // avartar = input.required<string>(); 
  // name = input.required<string>();
  // id = input.required<string>();

  // imagePath = computed(() => `assets/users/${this.avartar()}`);

  // onSelectUser(user: { id: string; name: string; avatar: string; }) {
  // } 

  */
} 
