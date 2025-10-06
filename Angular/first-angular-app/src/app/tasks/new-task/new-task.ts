import { Component, inject, Input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { ITaskModel } from '../task/task.model';


function generateRandomId(): string {
  return Math.random().toString(36).substring(2, 9); // Generates a 7-character string
}

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
  standalone: false,
})
export class NewTask {
  @Input({required: true}) userId!: string;
  private taskService = inject(TasksService);

  close = output<void>();

  enteredTitleModel= '';
  enteredSummaryModel = '';
  enteredDueDateModel = '';

  onCancel(){
        this.close.emit();
  }

  onSubmit() {
    this.taskService.addTaskToUser(this.userId, { 
      title: this.enteredTitleModel,
      dueDate: this.enteredDueDateModel,
      summary: this.enteredSummaryModel  
    });
    this.close.emit();
  } 
}
