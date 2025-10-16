import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
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
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form? : ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngOnInit(){
    console.log("ON INIT");
    console.log("ON Init form " + this.form?.nativeElement );
  }

  ngAfterViewInit(){
    console.log("After View Init");
    console.log("ON After View Init form " + this.form?.nativeElement);
  }

  onSubmit(title : string, request : string) {
    console.dir(title);
    console.dir(request);
    console.log('SUBMITTED');

    this.form?.nativeElement.reset();
    // this.form().nativeElement.reset();
  }


}
 