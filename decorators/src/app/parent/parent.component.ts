import { Component, ContentChild, ElementRef, HostBinding, HostListener } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent , FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  title = "hello"
  fromParentEvent = ""

  fromParentElem(event : string){
    this.fromParentEvent = event;
    console.log(event , "valeus of the event here")
  }

  @ContentChild('projectedPara') projectedParagraph!: ElementRef<HTMLParagraphElement>;

  sayHello(){
    // alert("Alert form view CHild")
  }

   ngAfterContentInit() {
    console.log('Projected content:', this.projectedParagraph.nativeElement.textContent);
    this.projectedParagraph.nativeElement.style.color = 'red';
  }


  @HostListener('click')
  onHostClick() {
    console.log('Host element (app-root) clicked!');
  }
}
