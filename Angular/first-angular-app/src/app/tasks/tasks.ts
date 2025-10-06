import { Component, Input, signal } from '@angular/core';
import { Task } from './task/task';
import { IUser } from '../user/user.model';
import { NewTask } from './new-task/new-task';
import { ITaskModel } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  // imports: [Task, NewTask],
  standalone: false,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  
  constructor(private taskService: TasksService) {}
 
  @Input({required: true}) user!: IUser ;
  isAddingTask = false;

  get tasksData()  {
    return this.taskService.getAllTasks(this.user.id);
  }

  AddTask(idUser: string) {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
     this.isAddingTask = false;
  }


}
