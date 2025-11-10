import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { RouterOutlet, RouterLink, ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {
  userId = input.required<string>();
  // userName = computed(() => this.userService.users.find(user => user.id === this.userId())?.name)
  userName = input.required<string>();
}

//you can outsource this function to file
export const resolveUsername : ResolveFn<string> = 
(activedRoute: ActivatedRouteSnapshot,
 routerState: RouterStateSnapshot 
 ) =>{
  const userService = inject(UsersService);
  const userName = userService.users.find(user => user.id === activedRoute.paramMap.get('userId'))?.name || '';
  return userName;
};
