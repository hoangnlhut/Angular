import { Component, computed, DestroyRef, inject, Injectable, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { RouterOutlet, RouterLink, ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent implements OnInit {
  userId = input.required<string>();
  // userName = computed(() => this.userService.users.find(user => user.id === this.userId())?.name)
  userName = input.required<string>();
  userNameClass = input.required<string>();

  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = this.activatedRoute.data.subscribe({
      next: data => console.log(data)
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

}

//you can outsource this function to file
// The modern, RECOMMENDED approach
export const resolveUsername : ResolveFn<string> = 
(activedRoute: ActivatedRouteSnapshot,
 routerState: RouterStateSnapshot 
 ) =>{
  const userService = inject(UsersService);
  const userName = userService.users.find(user => user.id === activedRoute.paramMap.get('userId'))?.name || '';
  return userName;
};

// The DEPRECATED approach : class
@Injectable({ providedIn: 'root' })
export class UserNameResolverClass implements Resolve<string> {
  constructor(private usersService: UsersService) {}

  resolve(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userName =
      this.usersService.users.find(
        (u) => u.id === activatedRoute.paramMap.get('userId')
      )?.name || '';
    return userName;
  }
}

export const resolveUserTaskTitle: ResolveFn<string> = (
  activedRoute: ActivatedRouteSnapshot,
 routerState: RouterStateSnapshot ) => {
  const userName = resolveUsername(activedRoute, routerState);
  return `${userName}'s Tasks`;
};