import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import type { TicketModel } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";
import { RecComponent } from './rec/rec.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent, RecComponent, FormsModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: TicketModel[] = [];

  rectSize = {
    width: 200,
    height: 100
  }
  

  addNewTicket(newTicket : TicketModel ){
      this.tickets.push(newTicket);
  }

  onCompleteTicket(idTicketToClose : string){
    // const exist = this.tickets.find( x => x.id === idTicketToClose);
    // if(exist)
    // {
    //   exist.status = 'closed';
    //   console.log('Closed id: ' + idTicketToClose);
    // }
    // else{
    //   console.log("Not Found");
    // }

    this.tickets = this.tickets.map((ticket) => {
      if(ticket.id === idTicketToClose){
        // ...ticket meant get all key-value left
        return { ...ticket, status: 'closed'}
      }
      return ticket;
    });

  }
}
