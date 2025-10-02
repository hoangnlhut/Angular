import { Component, Input, output, signal } from '@angular/core';
import { ITask } from './task.model';
import { DUMMY_USERS } from '../../dummy-users';
import { Card } from '../../shared/card/card';


@Component({
  selector: 'app-task',
  imports: [Card],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input() task?: ITask ;
  userData = signal(DUMMY_USERS);

  displayNewTask = output<boolean>();

  completeTask(idTask?: string) {
    for (const user of this.userData()) {
      const task = user.tasks.find(t => t.id === idTask);
      if (task) {
        task.completed = !task.completed;
        break; // Exit the loop once the task is found and updated
      }
    }

    this.displayNewTask.emit(true);
  }
}
