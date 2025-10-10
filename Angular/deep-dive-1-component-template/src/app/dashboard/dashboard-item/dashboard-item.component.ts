import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  // @Input({required: true}) imgInfo !: {src: string, alt: string};
  // @Input({required: true}) h2Info !: string; 


  //2nd approach
  imgInfo = input.required<{src: string, alt: string}>();
  h2Info = input.required<string>();
}
