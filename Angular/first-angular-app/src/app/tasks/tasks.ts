import { Component, computed, Input, input, signal } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input() nameUser :string | undefined ; // this union type --> 
  //  @Input() nameUser?:string   --> aqual to above 

;
}
