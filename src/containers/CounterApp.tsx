import { bindActionCreators, Dispatch } from "redux";
import { CounterAction } from "../actions/CounterActions";
import Counter from "../components/Counter";
import * as CounterActions from '../actions/CounterActions';
import { CounterState } from "../reducers";
import { connect } from "react-redux";

interface Props {
    counter: number,
    dispatch: Dispatch<CounterAction>
}

const CounterApp = (props: Props) => {
    const { counter, dispatch } = props;

    return (
        <Counter counter={counter} {...bindActionCreators(CounterActions, dispatch)} />
    )
}

const select = (state: CounterState) => ({
    counter: state.counter
})

export default connect(select)(CounterApp)