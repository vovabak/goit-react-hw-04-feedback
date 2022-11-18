import { useState } from "react";
import { Statistics } from "components/statistics";
import { FeedbackOptions } from "components/feedbackOptions";
import { Section } from "components/section";
import { Notification } from "components/notification";
import { Container } from './App.styled';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);  
  
  const countFeedback = e => {
    const name = e.currentTarget.name;    
    
    switch (name) {
      case 'good':
        setGood(value => value + 1)
        break;
      case 'neutral':
        setNeutral(value => value + 1)
        break;
      case 'bad':
        setBad(value => value + 1)
        break;
    
      default:
        return;
    }
  }

  const countTotalFeedback = () => good + neutral + bad;
  
  const countPositiveFeedbackPercentage = () => {    
    if (countTotalFeedback()) {
      return Number((good / countTotalFeedback() * 100).toFixed());
    }
  }

    return (
      <Container>
        <Section title='Please leave feedback'>
          <FeedbackOptions
              options={Object.keys({ good, neutral, bad })}
              onLeaveFeedback={countFeedback}
          />
          {countTotalFeedback() === 0 ?
            <Notification message='There is no feedback' /> :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          }
        </Section>
      </Container>
    );  
};