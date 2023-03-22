import { CounterAction } from "../actions/CounterActions";
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../constants/ActionTypes";

export default function counter(state = 0, action: CounterAction) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + 1;
        case DECREMENT_COUNTER:
            return state - 1;
        default:
            return state;
    }
}