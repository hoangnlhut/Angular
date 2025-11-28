import { createAction, props } from "@ngrx/store";

export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';

// export const increment = createAction(INCREMENT, props<{valueHoang: number}>());
// export const decrement = createAction(DECREMENT,  props<{value: number}>());

export class IncrementAction {
    readonly type = INCREMENT;
    constructor(public valueHoang: number) {}
}
export class DecrementAction {
    readonly type = DECREMENT;
    constructor(public value: number) {}
}
export type CounterActions = IncrementAction | DecrementAction;
