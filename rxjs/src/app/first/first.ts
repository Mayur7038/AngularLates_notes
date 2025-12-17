import { Component } from '@angular/core';
import { combineLatest, filter, fromEvent, interval, map, merge, Observable, of, reduce, zip } from 'rxjs';

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First {

  constructor() {
    // Creating Observable from scratch: Using the Observable constructor, 
    // you can create an Observable from scratch. 
    // It allows you to define a custom data stream 
    // and emit values manually using the next() method. Here's an example:

    const myObservable = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);

    })

    myObservable.subscribe(el => {
      console.log(el, "values of the element")
    })

    // Using RxJS operators: RxJS is a popular library for working with Observables in Angular
    //  and provides a wide range of operators for creating, transforming,
    //  and combining Observables.
    //  For example, you can use the of() operator to create an Observable that emits a fixed set of values like this:

    const myOf = of(1, 2, 3, 4);

    myOf.subscribe(el => {
      console.log(el, "values of the element")
    })


    //  Observables and Operators
    // Operators are a crucial feature of working with Observables in Angular. 
    // Operators are functions that allow you to transform or manipulate Observables in various ways.


    // map(): The map() operator transforms each value emitted by an Observable by applying a function to it. For example, you can use map() to transform a stream of numbers into a stream of their squares, like this:

    const number = of(1, 2, 3, 4);
    const squared = number.pipe(
      map(el => el * 2)
    )


    // The filter() operator filters out values emitted by an Observable that do not meet a specified condition.
    const filterOperator = number.pipe(
      filter(el => el % 2 == 0)
    )

    squared.subscribe(el => {
      console.log(el, "values here")
    })

    filterOperator.subscribe(el => {
      console.log(el, "filter operator")
    })

    // Reduce: The reduce() operator allows you to accumulate the values emitted by an Observable
    //  and return a single value. 

    const sourcefilter = of(1,2,3);
    const reduced = sourcefilter.pipe(
      reduce((acc , value)=> acc + value)
    )

    reduced.subscribe(
      value => console.log(value ,"values of reduced operator")
    )

    const number1 = of(1, 2, 3, 4)
    const number2 = of(5, 6, 7, 8)
    // The merge() operator combines multiple Observables into a single stream of values.
    const mergeNumber = merge(number1, number2);

    mergeNumber.subscribe(el => {
      console.log(el, "values of the merge operator")
    })


    // There are many other operators available in Angular, including tap(), 
    // switchMap(), and catchError(). 
    // These operators can help you create more powerful and efficient data streams in your Angular applications.


    // Subscribing to Observables
    // To consume data emitted by an Observable, you need to subscribe to it. 
    // Subscribing to an Observable is similar to registering an event listener and allows you to receive and handle values emitted by the Observable


    const numberz = of(1, 2, 3, 4);
    numberz.subscribe(
      value => console.log(value),
      error => console.log(error),
      () => console.log('completed')

    )


    // Combining Observables
    // One of the most powerful features of Observables is the ability to combine
    //  and manipulate them in various ways. 
    // It allows you to create complex data pipelines that handle various use cases. 
    // Here are some examples of how to combine Observables in Angular:

    // 1.Merge: The merge() operator allows you to combine multiple Observables into a single stream.
    const source1 = interval(1000);
    const source2 = interval(2000);

    // const merged = merge(source1 , source2);

    // merged.subscribe(
    //   value => console.log(value , "merge")
    // )


    // 2.CombineLatest: The combineLatest() operator allows you to combine the latest values emitted by multiple Observables into a single stream. 

    // const combined = combineLatest(source1, source2);
    // combined.subscribe(
    //   value => console.log(value)
    // );


    // 3.Zip: The zip() operator allows you to combine the values emitted by multiple Observables into arrays.
    const source3 = of(1,  2,  '3','k','h');
    const source4 = of('a','b','c','d');
    const zipped = zip(source3 ,source4);
    zipped.subscribe(
      value => console.log(value , "values of zipped")
    )

  }
}
