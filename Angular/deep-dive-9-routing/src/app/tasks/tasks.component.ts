import { Component, computed, DestroyRef, inject, input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterStateSnapshot } from "@angular/router";

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent{
  order = input<'asc' | 'desc' | undefined>();
  message = input.required<string>();
  userId = input.required<string>();
  userTasks = input.required<Task[]>();
}

export const resolveUserTasks : ResolveFn<Task[]> = 
(activedRouteSnapshot: ActivatedRouteSnapshot,
 routerState: RouterStateSnapshot 
 ) =>{
    console.log('resolveUserTasks is running');
    const order = activedRouteSnapshot.queryParams['order'];
    const taskService = inject(TasksService);
    const tasks = taskService
      .allTasks()
      .filter(task => task.userId === activedRouteSnapshot.paramMap.get('userId'));
    
    if(order && order === 'asc')
    {
      tasks.sort((a,b) => (a.id > b.id) ? 1: -1)
    }
    else
    {
      tasks.sort((a,b) => (a.id > b.id) ? -1: 1)
    }

    return tasks.length ? tasks: [];
 };
  

