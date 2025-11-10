import { Component, computed, inject, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  private taskService = inject(TasksService);
  userId = input.required<string>();
  userTasks = computed(() => this.taskService.allTasks().filter(task => task.userId === this.userId()));
}
