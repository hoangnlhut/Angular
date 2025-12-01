import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment } from "./counter.actions";
import { tap, withLatestFrom } from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCount } from "./counter.selectors";

@Injectable()
export class CounterEffects{
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