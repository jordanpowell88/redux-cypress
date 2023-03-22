import { Provider } from "react-redux";
import { Store } from "redux";
import { CounterAction } from "./actions/CounterActions";
import DevTools from "./components/DevTools";
import CounterApp from "./containers/CounterApp";
import { CounterState } from "./reducers";

interface Props {
    store: Store<CounterState, CounterAction>
}

const Root = (props: Props) => {
    const { store } = props;

    return (
        <Provider store={store}>
            <div>
                <CounterApp />
                <DevTools />
            </div>
        </Provider>
    )
}

export default Root;