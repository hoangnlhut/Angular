import { Component, HostBinding, HostListener, ViewEncapsulation, input} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  //first way to add class in this host element
  // by using host properties (RECOMMENDED PREFERD ON DECORATION OBJECT)
  host: {    
    class: 'control', // for binding properties
    '(click)' : 'onClick()', // for binding event
  }
})
export class ControlComponent {
  // 2nd way to add class (NOT recommended)
  // Due to exists for backward compatibility reasons

  // @HostBinding('class') className = 'control'; 

  //  @HostListener('click') onClick(){
  //   console.log("Clicked");
  //  }
  label = input<string>();

  onClick(){
    console.log("Clicked");
  }
}
