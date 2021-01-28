import React, { Component } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
   onLeaveFeedback = option => {
    this.setState({ [option]: this.state[option] + 1 });
  };
  
  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const positivePercentage = Math.round((this.state.good / total) * 100);

    const { good, neutral, bad } = this.state;
    return (
     <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message={'No statistics given'} />
          )}
        </Section>
      </div>
    );
  }
}
 
export default App;
