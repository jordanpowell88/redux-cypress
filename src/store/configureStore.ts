import { persistState } from "@redux-devtools/core";
import { compose, createStore, PreloadedState } from "redux";
import DevTools from "../components/DevTools";
import rootReducer, { CounterState } from "../reducers";

function getDebugSessionKey() {
    const matches = /[?&]debug_session=([^&#]+)\b/.exec(window.location.href);
    return matches && matches.length > 0 ? matches[1] : null;
}

const enhancer = compose(
    DevTools.instrument(),
    persistState(getDebugSessionKey())
)

export default function configureStore(
    initialState?: PreloadedState<CounterState>
) {
    const store = createStore(rootReducer, initialState, enhancer)

    return store;
}