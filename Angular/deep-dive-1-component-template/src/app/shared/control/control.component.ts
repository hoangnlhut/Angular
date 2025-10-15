import { Component, ContentChild, ElementRef, ViewEncapsulation, contentChild, inject, input} from '@angular/core';

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
  label = input<string>();
  private el =inject(ElementRef); // we can access this host element via coding like this

  // using ContentChild Decorator
  @ContentChild('input') private control ?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  // using contentChild signal-based new function
    private control1 = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  onClick(){
    console.log("Clicked");
    console.log(this.el);
    
    // using ContentChild Decorator
    console.log(this.control);

    // using contentChild function
    console.log(this.control1());
  }
}
