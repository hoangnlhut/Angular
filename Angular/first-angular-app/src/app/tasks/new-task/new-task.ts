import { Component, Input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
   
  onCancel(){
        this.cancel.emit();
  }

  onSubmit(userId: string) {
    console.log('START LOGGING');
    console.log('User ID in NewTask Component: ' + userId);
    console.log('Title: ' + this.enteredTitle);
    console.log('Summary: ' + this.enteredSummary);
    console.log('Due Date: ' + this.enteredDueDate);
    console.log('END LOGGING');

    // You can add further logic here to handle the new task creation
    this.cancel.emit();
  }
}
