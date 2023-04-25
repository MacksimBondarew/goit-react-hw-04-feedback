import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const options = {
        good: good,
        neutral: neutral,
        bad: bad,
    };
    const onLeaveFeedbackButton = evt => {
        const { name } = evt.target;
        switch (name) {
            case 'good':
                setGood(good + 1);
                break;
            case 'neutral':
                setNeutral(neutral + 1);
                break;
            case 'bad':
                setBad(bad + 1);
                break;
            default:
                break;
        }
    };
    function countTotalFeedback() {
        return good + bad + neutral;
    };
    function countPositiveFeedbackPercentage() {
        const procentPositive = (good / (good + bad + neutral)) * 100;
        return Math.round(procentPositive) || 0;
    }
    return (
        <>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={Object.keys(options)}
                    onLeaveFeedback={onLeaveFeedbackButton}
                />
            </Section>
            <Section title="Statistics">
                {countTotalFeedback() > 0 ? (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()}
                    />
                ) : (
                    <Notification message="There is no feedback" />
                )}
            </Section>
        </>
    );
};

export default App;
