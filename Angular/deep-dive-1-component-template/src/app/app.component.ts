import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";
import { LifeCycleComponentComponent } from "./life-cycle-component/life-cycle-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerStatusComponent, TicketsComponent, TrafficComponent, DashboardItemComponent, LifeCycleComponentComponent],
})
export class AppComponent {
  imgInfoServer =  {src: 'status.png', alt: 'A signal symbol'};
  h2InfoServer = 'Server Status';

  imgInfoTrafic = {src: 'globe.png', alt: 'A globe'};
  h2InfoTraffic = 'Traffic';

  imgInfoTickets = {src: 'list.png', alt: 'A list of items'};
  h2InfoTickets = 'Support Tickets';
  

  lifecycleComponentIsVisible = false;
  lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;

  onToggleLifecycleComponentVisibility() {
    this.lifecycleComponentIsVisible = !this.lifecycleComponentIsVisible;
  }

  onChangeLifecycleInputText() {
    this.lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;
  }
}
