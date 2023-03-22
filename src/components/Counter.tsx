interface Props {
    increment: () => void;
    decrement: () => void;
    counter: number
}

const Counter = (props: Props) => {
    const { increment, decrement, counter } = props;
    
    return (
        <>
        <p>Clicked: { counter } times</p>
        <div>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
        </>
    )
}

export default Counter;