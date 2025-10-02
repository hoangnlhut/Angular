import { Component, Input, signal } from '@angular/core';
import { Task } from './task/task';
import { DUMMY_USERS } from '../dummy-users';
import { IUser } from '../user/user.model';
import { NewTask } from './new-task/new-task';

function generateRandomId(): string {
  return Math.random().toString(36).substring(2, 9); // Generates a 7-character string
}

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {

  userData = signal(DUMMY_USERS);

  @Input({required: true}) user!: IUser ;
  // this union type --> 
  isAddingTask = false;
  //  @Input() nameUser?:string   --> aqual to above 

  AddTask(idUser: string) {

    // const singleUserData =  this.userData().find(u => u.id === idUser);
    // if (singleUserData) {
    //   const newTask = { id: generateRandomId(), title: 'New Task', completed: false, dueDate: new Date(), summary: 'This is a summary of the newTaskId task.'  };
    //   singleUserData.tasks.push(newTask);
    // }
    // else 
    // {
    //   throw new Error('Method not implemented.');
    // }

    this.isAddingTask = true;
  }

  onCancelAddTask() {
     this.isAddingTask = false;
  }

}
