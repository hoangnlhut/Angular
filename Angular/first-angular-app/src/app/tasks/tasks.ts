import { Component, Input, signal } from '@angular/core';
import { Task } from './task/task';
import { DUMMY_USERS } from '../dummy-users';
import { IUser } from '../user/user.model';
import { NewTask } from './new-task/new-task';



@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required: true}) user!: IUser ;
  // this union type --> 
  isAddingTask = false;
  //  @Input() nameUser?:string   --> aqual to above 

  AddTask(idUser: string) {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
     this.isAddingTask = false;
  }

}
