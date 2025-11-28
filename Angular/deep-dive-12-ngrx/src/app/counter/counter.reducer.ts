import { createReducer, on } from "@ngrx/store";
import { increment } from "./counter.actions";

const initialState = 0;
// new approach
// export const counterReducer = createReducer(initialState, on(increment, (currentState,action) => currentState + action.valueHoang));

//old approach
export function counterReducer(state =initialState, action: any) {
    if (action.type === '[Counter] Increment') {
        return state + action.valueHoang;
    }
    if (action.type === '[Counter] Decrement') {
        return state - action.value;
    }
    return state;
}

