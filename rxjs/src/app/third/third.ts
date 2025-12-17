import { Component } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-third',
  imports: [],
  templateUrl: './third.html',
  styleUrl: './third.css',
})
export class Third {


  // Subject extends Observable and adds the ability to emit values (next, error, complete).
  private mySubject = new Subject();

  // BehaviorSubject extends Subject and adds logic to store and replay the last emitted value.
  private myBehaviorSubject = new BehaviorSubject(5);

  // ReplaySubject also extends Subject, just like BehaviorSubject. However, it adds additional functionality to replay a specified number of emitted values (or values emitted within a certain time window) to new subscribers.
  private myReplaySubjet = new ReplaySubject(2) // it gives last emitted two values to the subcriber

  constructor() {
  
    this.myReplaySubjet.next(2)
    this.myReplaySubjet.next(3)
    this.myReplaySubjet.next(4)
    this.myReplaySubjet.next(5)


    this.myReplaySubjet.subscribe(
      value => console.log(value , "first values")
    )
    this.myReplaySubjet.next(6)
    this.myReplaySubjet.subscribe(
      value => console.log(value , "second value")
    )
    // this.myReplaySubjet.next(7 )
  }





}
