import { afterNextRender, afterRender, AfterViewInit, Component, ElementRef, OnInit, output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { TicketModel } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form? : ElementRef<HTMLFormElement>;

  add = output<TicketModel>();
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  constructor(){
      // run once for triggering to listen for next changes of entire application
      afterNextRender(() => {
        console.log("Constructor New-Ticket: run once in After Next Render");
      });

      //run everytime for future change of entire application
      afterRender(() => {
        console.log("Constructor New-Ticket: run everytime in After Render");
      });
  }

  ngOnInit(){
    console.log("ON INIT");
    console.log("ON Init form " + this.form?.nativeElement );
  }

  ngAfterViewInit(){
    console.log("After View Init");
    console.log("ON After View Init form " + this.form?.nativeElement);
  }

  onSubmit(title : string, request : string) {
    // console.dir(title);
    // console.dir(request);
    // console.log('SUBMITTED');
    this.add.emit( {
        id: Math.random().toString(),
        title: title,
        request : request,
        status: 'open'
    });

    this.form?.nativeElement.reset();
    // this.form().nativeElement.reset();
  }


}
 