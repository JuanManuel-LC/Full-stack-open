import { useState } from "react";

const ProcessStatistics = ({ total, average, positive }) => {
    return (
        <>
            <p>Total: {total}</p>
            <p>Average: {average.toFixed(2)}</p>
            <p>Positve: {positive.toFixed(2)}</p>
        </>
    );
};

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const average =
        total === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / total;
    const positive = total === 0 ? 0 : (good / total) * 100;

    if (total > 0) {
        return (
            <>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <ProcessStatistics
                    total={total}
                    average={average}
                    positive={positive}
                />
            </>
        );
    } else {
        return <p>No feedback given</p>;
    }
};

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <>
            <h1>Give Feedback</h1>
            <button onClick={() => setGood(good + 1)}>Good</button>
            <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
            <button onClick={() => setBad(bad + 1)}>Bad</button>

            <h2>Stadistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </>
    );
};

export default App;
