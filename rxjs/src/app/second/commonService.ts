import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";


@Injectable({
    "providedIn" : "root"
})

export class CommonService {

    // In addition to Observables, the RxJS library also provides the Subject class, 
    // which can be used to emit values to multiple subscribers. 
    // A Subject is both an Observable and an Observer, 
    // which means that it can emit values and subscribe to other Observables.
    mySubject = new Subject<string>();

    emitValue(){
        this.mySubject.next(Math.random().toFixed(1))
    }

    valueChange(){
        return this.mySubject.asObservable();
    }

    myBehaviorSubject = new BehaviorSubject<string>(Math.random().toFixed(1));

    emitBehaviorSubject(){
        this.myBehaviorSubject.next(Math.random().toFixed(1))
    }
    valueChangeBehaviourSubject(){
        return this.myBehaviorSubject.asObservable()
    }
}