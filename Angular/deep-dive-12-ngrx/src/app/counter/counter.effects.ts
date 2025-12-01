import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment } from "./counter.actions";
import { tap } from "rxjs";

export class CounterEffects{
    saveCount = createEffect(() => this.action$.pipe(
        ofType(increment, decrement),
        tap(action => {
            console.log('Saving count to local storage:', action);
            // Here you can add logic to save the count to local storage or make an API call
            localStorage.setItem('counter', action.value.toString());
        })  
    ), { dispatch: false }); 

    constructor(private action$: Actions) {}
}