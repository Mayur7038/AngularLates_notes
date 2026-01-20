import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  // propery decorator
  @Input() childTitle = ""

  @Output() toParent = new EventEmitter()

  updateInput($event : any){
    this.toParent.emit($event?.target["value"])
  }
}
