import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User, IUser } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, User, Tasks ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = signal(DUMMY_USERS);
  selectedUserId?: string;

  get selectedUser() {
    return this.users().find(u => u.id === this.selectedUserId);
  }

  SelectOnUserHoang(user: IUser) {
    console.log('Log in App Component IN SelectOnUserHoang- user information' + JSON.stringify(user) );
    this.selectedUserId = user.id;
  }

}
