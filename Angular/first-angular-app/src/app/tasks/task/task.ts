import { Component, Input } from '@angular/core';
import { ITask } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input() task?: ITask ;
}
