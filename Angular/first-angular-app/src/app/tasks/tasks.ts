import { Component, Input, signal } from '@angular/core';
import { Task } from './task/task';
import { DUMMY_USERS } from '../dummy-users';
import { IUser } from '../user/user.model';


@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  userData = signal(DUMMY_USERS);

  @Input({required: true}) user!: IUser ; // this union type --> 
  //  @Input() nameUser?:string   --> aqual to above 

  AddTask(idUser: string) {

    const singleUserData =  this.userData().find(u => u.id === idUser);
    if (singleUserData) {
      const newTask = { id: 'newTaskId', title: 'New Task', completed: false, dueDate: new Date(), summary: 'This is a summary of the newTaskId task.'  };
      singleUserData.tasks.push(newTask);
    }
    else 
    {
      throw new Error('Method not implemented.');
    }
  }
}
