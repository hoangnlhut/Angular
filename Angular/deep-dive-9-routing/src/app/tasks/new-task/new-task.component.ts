import { Component, inject, input, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { TasksService } from '../tasks.service';
import { ActivatedRouteSnapshot, CanDeactivateFn, Router, RouterLink, RouterStateSnapshot } from "@angular/router";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  userId = input.required<string>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');
  isSubmit = false;
  private tasksService = inject(TasksService);
  private route = inject(Router);

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      },
      this.userId()
    );

    this.isSubmit = true;

    this.route.navigate(['/users', this.userId(), 'tasks'], {
      replaceUrl: true
    });
  }

}

export const canLeaveEditPage: CanDeactivateFn<NewTaskComponent> = (component: NewTaskComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) => {
    if(component.isSubmit) return true;

    if (component.enteredDate() || component.enteredSummary()  || component.enteredTitle())
    {
      return confirm('You have unsaved changes. Are you sure you want to leave?');
    }
    return true;
};
