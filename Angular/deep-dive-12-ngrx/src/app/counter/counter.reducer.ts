import { createReducer } from "@ngrx/store";

const initialState = 0;
//old approach
export function counterReducer(state =initialState){
    return state;
}

// new approach
// export const counterReducer = createReducer(initialState);

