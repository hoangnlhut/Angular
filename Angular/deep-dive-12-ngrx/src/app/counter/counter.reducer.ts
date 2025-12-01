import { Action, createReducer, on } from "@ngrx/store";
import { increment, decrement, set} from "./counter.actions";

const initialState = 0;
// new approach
export const counterReducer = createReducer(initialState, 
    on(increment, (currentState, action) => currentState + action.value),
    on(decrement, (currentState, action) => currentState - action.value),
    on(set, (currentState, action) => action.value),
);

//old approach
// export function counterReducer(state =initialState, action: CounterActions | Action) {
//     if (action.type === INCREMENT) {
//         return state + (action as IncrementAction).valueHoang;
//     }
//     if (action.type === DECREMENT) {
//         return state - (action as DecrementAction).value;
//     }
//     return state;
// }

