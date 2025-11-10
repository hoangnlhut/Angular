import { Component, computed, DestroyRef, inject, input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent implements OnInit{
  private taskService = inject(TasksService);

  order = signal<'asc' | 'desc'>('desc');
  message = input.required<string>();

  userId = input.required<string>();
  userTasks = computed(() => 
    this.taskService.allTasks()
    .filter(task => task.userId === this.userId())
    .sort((a, b) => 
      this.order() === 'desc' ? (a.id > b.id ? -1 : 1) : (a.id > b.id ? 1 : -1))
  );

  //1. input signal ways
  // order = input<'asc' | 'desc'>();

  //2. activatedRoute observable way
  // order? : 'asc' | 'desc';
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    console.log(this.message());
    const subscription = this.activatedRoute.queryParams.subscribe({
      next: param => this.order.set(param['order'])
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  
}
