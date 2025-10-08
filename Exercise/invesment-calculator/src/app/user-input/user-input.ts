import { Component, computed, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-results/investment-input.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css'
})
export class UserInput {
  calculate = output<InvestmentInput>();
  // enteredInitialInvestment = '0';
  // enteredAnnualInvestment = '0';
  // enteredExpectedReturn = '5';
  // enteredDuration = '10';

  // using signal
  enteredInitialInvestment =  signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('0');
  enteredDuration = signal('0');

  onSubmit(){
    this.calculate.emit({
      initialInvestment : +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment()
    });
  }

}
