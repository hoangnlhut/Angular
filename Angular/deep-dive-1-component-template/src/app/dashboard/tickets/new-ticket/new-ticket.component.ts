import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  onSubmit(enteredTitleElement : HTMLInputElement, enteredRequestElement : HTMLTextAreaElement) {
    console.dir(enteredTitleElement);
    console.log("Title submitted: " + enteredTitleElement.value);
    console.dir(enteredRequestElement);
    console.log("Title submitted: " + enteredRequestElement.value);
    console.log('SUBMITTED');
  }
}
