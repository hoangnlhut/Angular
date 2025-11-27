import { createReducer } from "@ngrx/store";

const initialState = 0;

// new approach
// export const counterReducer = createReducer(initialState);

//old approach
export function counterReducer(state =initialState){
    return state;
}