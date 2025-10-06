import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: false,
})
export class Header {
  protected readonly author = signal('Hoang handsome');
}
