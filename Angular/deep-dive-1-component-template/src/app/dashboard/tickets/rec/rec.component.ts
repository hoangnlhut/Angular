import { Component, model } from '@angular/core';

@Component({
  selector: 'app-rec',
  standalone: true,
  imports: [],
  templateUrl: './rec.component.html',
  styleUrl: './rec.component.css'
})
export class RecComponent {
  size = model.required<{width: number, height: number}>();

  onReset(){
    this.size.set({width: 50, height: 50});
  }
}
