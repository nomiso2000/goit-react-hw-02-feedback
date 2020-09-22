import React, { Component } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";
import styles from "./App.module.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = ({ target }) => {
    const feedback = target.dataset.rate;
    this.setState((prevState) => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((total, el) => total + el, 0);
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const percentagePositiveFeedback = `${Math.floor(
      (good / this.countTotalFeedback()) * 100
    )}%`;
    return percentagePositiveFeedback;
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={styles.feedbackContainer}>
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={this.handleLeaveFeedback}
        />
        {good > 0 || neutral > 0 || bad > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}

export default App;
