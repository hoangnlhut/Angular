import { Component, computed, inject} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css'
})
export class InvestmentResults {
  private investmentService = inject(InvestmentService);

  // get results(){
  //    return this.investmentService.dataResult;
  // }

  //using signal + computed
  results = computed(() => this.investmentService.dataResult());

  // or use it shortly
  // results  = this.investmentService.dataResult.asReadonly();
}
