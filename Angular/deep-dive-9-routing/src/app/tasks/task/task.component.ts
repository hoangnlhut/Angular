import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [DatePipe, CardComponent],
})
export class TaskComponent {
  task = input.required<Task>();
  private tasksService = inject(TasksService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  onComplete() {
    this.tasksService.removeTask(this.task().id);
    // ./ : means navigate to current url
    this.router.navigate(['./'], {
      // make sure Angular navigate relative to the current route
        relativeTo: this.activatedRoute, 
        // navigate this route as if we come from different route
        onSameUrlNavigation: 'reload', 
        // keep all param and query param on url
        queryParamsHandling: 'preserve' 
    })
  }
}
