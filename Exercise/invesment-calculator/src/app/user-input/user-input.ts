import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css'
})
export class UserInput {

  enteredInitialInvestment: any;
  enteredAnnualInvestment: any;
  enteredExpectedReturn: any;
  enteredDuration: any;

  onSubmit(){
    throw new Error('Method not implemented.');
  }

}
