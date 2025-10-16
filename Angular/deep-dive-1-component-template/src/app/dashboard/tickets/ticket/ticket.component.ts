import { Component, input, signal } from '@angular/core';
import type { TicketModel } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
    data = input.required<TicketModel>();

    detailVisible = signal(true);

    onToggleDetails() {
      //1st ways 
      // this.detailVisible.set(!this.detailVisible());

      //2nd way is better due to we can get previous value
      this.detailVisible.update((wasVisible) => !wasVisible);
    }
}
