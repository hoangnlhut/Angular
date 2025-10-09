import { Injectable, signal } from "@angular/core";
import type { InvestmentInput, InvestmentResult } from "./investment-results/investment-input.model";

@Injectable({providedIn: 'root'})
export class InvestmentService{
    // dataResult ?: InvestmentResult[] ;
    dataResult = signal<InvestmentResult[] | undefined>(undefined);

    calculateInvestmentResults(data: InvestmentInput){
    
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
    
        // this.dataResult = annualData;
        this.dataResult.set(annualData);
    }
}