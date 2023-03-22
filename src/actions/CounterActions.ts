import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../constants/ActionTypes";

interface IncrementCounterAction {
    type: typeof INCREMENT_COUNTER
}

export function increment(): IncrementCounterAction {
    return {
        type: INCREMENT_COUNTER
    }
}

interface DecrementCounterAction {
    type: typeof DECREMENT_COUNTER
}

export function decrement(): DecrementCounterAction {
    return {
        type: DECREMENT_COUNTER
    }
}

export type CounterAction = IncrementCounterAction | DecrementCounterAction;
