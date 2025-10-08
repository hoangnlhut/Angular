import { Component, Input } from '@angular/core';
import type { InvestmentResult } from './investment-input.model';

@Component({
  selector: 'app-investment-results',
  imports: [],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css'
})
export class InvestmentResults {
   @Input() results ?: InvestmentResult[];
}
