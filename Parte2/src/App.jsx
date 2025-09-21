import { useState } from "react";

const Display = (props) => <>{props.value}</>;

const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
);

const App = () => {
    const [value, setValue] = useState(10);

    const setToValue = (newValue) => {
        console.log("value now", newValue);
        setValue(newValue);
    };

    return (
        <div>
            <Display value={value} />
            <button onClick={() => setToValue(1000)} text="thousand">
                thousand
            </button>
            <button onClick={() => setToValue(0)} text="zero">
                reset
            </button>
            <button onClick={() => setToValue(value + 1)} text="increment">
                increment
            </button>
        </div>
    );
};

export default App;
