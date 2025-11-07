import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit{
  //new way
  // userId = input.required<string>();
  // private userService = inject(UsersService);
  // userName = computed(() => this.userService.users.find(user => user.id === this.userId())?.name)

  //old way via observable using activatedRoute
  userName = '';
  private userService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    console.log(this.activatedRoute);
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
          console.log(paramMap);
          this.userName = this.userService.users.find(ur => ur.id === paramMap.get('userId'))?.name ?? '';
      }
    });

    this.destroyRef.onDestroy(() => 
    {
      console.log('destroy ref');
      subscription.unsubscribe();
    });
  }
}
