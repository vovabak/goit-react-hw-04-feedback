import { Component } from "react";
import { Statistics } from "components/statistics";
import { FeedbackOptions } from "components/feedbackOptions";
import { Section } from "components/section";
import { Notification } from "components/notification";
import { Container } from './App.styled';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  
  countFeedback = e => {    
    const value = e.currentTarget.name;
    
    this.setState(prevState => {      
      return { [value]: prevState[value] + 1 };
    });
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    if (this.countTotalFeedback()) {
      return Number((good / this.countTotalFeedback() * 100).toFixed());
    }
  }

  render()
  {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title='Please leave feedback'>
          <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.countFeedback}
          />
          {this.countTotalFeedback() === 0 ?
            <Notification message='There is no feedback' /> :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          }
        </Section>
      </Container>
    );
  }
};