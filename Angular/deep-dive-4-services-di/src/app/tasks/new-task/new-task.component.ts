import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('formHoang');

  // private taskService = inject(TasksService); // Placeholder for TasksService injection
  constructor(private taskService: TasksService) {}

  onAddTask(title: string, description: string) {
    console.log('New Task Added:', { title, description });
    this.taskService.addTask({ title, description });
    this.formEl()?.nativeElement.reset();
  }
}
