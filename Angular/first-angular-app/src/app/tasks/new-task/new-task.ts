import { Component, Input, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DUMMY_USERS } from '../../dummy-users';


function generateRandomId(): string {
  return Math.random().toString(36).substring(2, 9); // Generates a 7-character string
}

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input({required: true}) userId!: string ;
  cancel = output<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

   userData = signal(DUMMY_USERS);
   
  onCancel(){
        this.cancel.emit();
  }

  onSubmit(userId: string) {
    // console.log('START LOGGING');
    // console.log('User ID in NewTask Component: ' + userId);
    // console.log('Title: ' + this.enteredTitle);
    // console.log('Summary: ' + this.enteredSummary);
    // console.log('Due Date: ' + this.enteredDueDate);
    // console.log('END LOGGING');

    // You can add further logic here to handle the new task creation
    const singleUserData =  this.userData().find(u => u.id === userId);
    if (singleUserData) {
      const newTask = { 
        id: generateRandomId(), 
        title: this.enteredTitle,
        completed: false, 
        dueDate: new Date(this.enteredDueDate), 
        summary: this.enteredSummary  
      };
      singleUserData.tasks.unshift(newTask);
    }
    else 
    {
      throw new Error('Method not implemented.');
    }

    this.cancel.emit();
  }
}
