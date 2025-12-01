import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment, init, set } from "./counter.actions";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCount } from "./counter.selectors";

@Injectable()
export class CounterEffects{
    loadCount = createEffect(() => this.action$.pipe(
        ofType(init),
        switchMap(() => {
            const storedCounter = localStorage.getItem('counter');
            if(storedCounter){
                //dispatch new action to set the counter
                return of(set({value: +storedCounter}));
            }

            //dispatch new action to set the counter
            return of(set({value: 0}));
        })
    ));

    saveCount = createEffect(() => this.action$.pipe(
        ofType(increment, decrement),
        withLatestFrom(this.store.select(selectCount)),
        tap(([action, counter]) => {
            console.log(`Saving count ${action} to local storage : ${counter}`);
            // Here you can add logic to save the count to local storage or make an API call
            localStorage.setItem('counter', counter.toString());
        })  
    ), { dispatch: false }); 

    constructor(private action$: Actions, private store: Store<{counter: number}>) {}
}