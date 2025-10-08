import { Component, signal } from '@angular/core';
import { UserInput } from './user-input/user-input';
import { InvestmentResults } from './investment-results/investment-results';
import { Header } from './header/header';
import type { InvestmentInput, InvestmentResult } from './investment-results/investment-input.model';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('invesment-calculator');
  // resultsData ?: InvestmentResult[];

  //using signal
  resultsData = signal<InvestmentResult[] | undefined>(undefined);

  onCalculateInvestmentResults(data: InvestmentInput) {

    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
            
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultsData.set(annualData);
  }
}
