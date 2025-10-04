import { Component, Input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { ITaskModel } from '../task/task.model';


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

  cancel = output<void>();
  addTask = output<ITaskModel>();

  enteredTitleModel= '';
  enteredSummaryModel = '';
  enteredDueDateModel = '';

  onCancel(){
        this.cancel.emit();
  }

  onSubmit() {
    this.addTask.emit({ 
      title: this.enteredTitleModel,
      dueDate: this.enteredDueDateModel,
      summary: this.enteredSummaryModel  
    });
  }
}
