import { Component, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonService } from './commonService';
@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.html',
  styleUrl: './second.css',
})
export class Second {


  private commonService = inject(CommonService)
  emitValue(){
    this.commonService.emitValue()
  }

  emitBehaviorValue(){
    this.commonService.emitBehaviorSubject();
  }
  constructor(){
    this.commonService.valueChange().subscribe(
      value => console.log(value , "values here")
    )

    this.commonService.valueChangeBehaviourSubject().subscribe(
      value => console.log(value , "behaviourVlaue changes")
    )
  }

//   Angular Observables are a powerful tool for managing asynchronous data flow in your applications. With the help of the RxJS library, you can create and manipulate Observables to handle everything from user input to HTTP requests.

// In this article, we covered the basics of Observables, including how to create and subscribe to them, and how to use operators to transform and filter emitted values. We also looked at some advanced topics, such as using Subjects to emit values to multiple subscribers.

// By understanding how to use Angular Observables effectively, you can build more responsive and reactive applications that provide a better user experience. Whether you’re working with simple form data or complex data streams, Observables can help you manage it with ease.

// So next time you’re working on an Angular application, consider using Observables to handle your data flow needs. With their powerful capabilities and rich feature set, you’ll be able to create applications that are more robust, flexible, and scalable.






}
