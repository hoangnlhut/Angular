import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, User ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = signal(DUMMY_USERS);

  SelectOnUserHoang(user: { id: string; name: string; avatar: string; }) {
    console.log('Log in App Component - user information' + JSON.stringify(user) );
  }
}
