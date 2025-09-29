import { Component, computed, effect, input, Input, linkedSignal, signal } from '@angular/core';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  // @Input({required: true}) avartar!: string;
  // @Input({required: true}) name!: string;
  // @Input({required: true}) id!: string;

  //INPUT is only readonly SIGNAL
  //SO We can't change value of INPUT in CHILD COMPONENT
  avartar = input.required<string>(); 
  name = input.required<string>();
  id = input.required<string>();

  imagePath = computed(() => `assets/users/${this.avartar()}`);

  onSelectUser(user: { id: string; name: string; avatar: string; }) {

  //INPUT is only readonly SIGNAL
  //SO We can't change value of INPUT in CHILD COMPONENT
  // this.name.set('Selected: ' + user.name);
  
  } 
} 
