import { Component, Input, output, inject } from '@angular/core';
import { ITask } from './task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  private _taskService = inject(TasksService);
  
  @Input() task!: ITask ;
  displayNewTask = output<boolean>();

  completeTask(idTask?: string) {
    this._taskService.removeTask(idTask || '');
    this.displayNewTask.emit(true);
  }
}
