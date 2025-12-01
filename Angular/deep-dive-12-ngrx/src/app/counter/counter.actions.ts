import { createAction, props } from "@ngrx/store";

export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';

export const init = createAction('[Counter] Init');

export const set = createAction('[Counter] Set', props<{ value: number }>());

export const increment = createAction(INCREMENT, props<{value: number}>());
export const decrement = createAction(DECREMENT,  props<{value: number}>());

// export class IncrementAction {
//     readonly type = INCREMENT;
//     constructor(public valueHoang: number) {}
// }
// export class DecrementAction {
//     readonly type = DECREMENT;
//     constructor(public value: number) {}
// }
// export type CounterActions = IncrementAction | DecrementAction;
