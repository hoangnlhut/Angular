import { Component, input, Input } from '@angular/core';
import type { InvestmentResult } from './investment-input.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css'
})
export class InvestmentResults {
  //  @Input() results ?: InvestmentResult[];

   //using input signal
   results = input<InvestmentResult[]>();
}
