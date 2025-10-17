import { Component, input, signal, computed, effect, output } from '@angular/core';
import type { TicketModel } from '../ticket.model';
import { single } from 'rxjs';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent{
  // @Input({required: true}) data !: TicketModel;
    data = input.required<TicketModel>();
    onComplete = output<string>();

    detailVisible = signal(true);

    onToggleDetails() {
      //1st ways 
      // this.detailVisible.set(!this.detailVisible());

      //2nd way is better due to we can get previous value
      this.detailVisible.update((wasVisible) => !wasVisible);
    }

    onCloseTicket() {
      this.onComplete.emit(this.data().id);
    }
}


