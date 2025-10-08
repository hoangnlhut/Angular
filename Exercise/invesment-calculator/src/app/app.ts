import { Component, signal } from '@angular/core';
import { UserInput } from './user-input/user-input';
import { InvestmentResults } from './investment-results/investment-results';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('invesment-calculator');
}
