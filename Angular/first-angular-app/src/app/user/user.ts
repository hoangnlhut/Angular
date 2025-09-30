import { Component, Input,  Output,  EventEmitter,input, output } from '@angular/core';
import { IUser } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  // OLD WAY (not recommended) using @INPUT and @OUTPUT DECORATOR property
  // but this way , you can update the value of input property inside this component

  @Input({required: true}) user!: IUser;  

  //using @OUTPUT DECORATOR property
  @Output() select1 = new EventEmitter();

  //using output() function : has the same function as @Output() decorator property
  //but output is more strict than @Output decorator property by defining the type of event emitter WILL BE EMITTED
  selecthoang = output<IUser>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser(user: IUser) {
    // this line will emit the event to the parent component  
    this.selecthoang.emit(user);
  } 

  /* NEW WAY (recommended) using SIGNAL and INPUT FUNCTION and OUTPUT singal fuction */

  // --> it will you change detection base Singal on Angular (ADVANTAEGE)
  // NOTE: input() function is READ-ONLY, so we cannot change its value inside this component
  // avartar = input.required<string>(); 
  // name = input.required<string>();
  // id = input.required<string>();

  // imagePath = computed(() => `assets/users/${this.avartar()}`);

  // onSelectUser(user: { id: string; name: string; avatar: string; }) {
  // } 

  
} 


