import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [good, neutral, bad] = options;
  return (
    <div>
      <span className={styles.btnBoxTitle}>Please leave feedback</span>
      <div className={styles.btnBox}>
        <button
          className={styles.button}
          type="button"
          data-rate={good}
          onClick={onLeaveFeedback}
        >
          Good
        </button>

        <button
          className={styles.button}
          type="button"
          data-rate={neutral}
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
        <button
          className={styles.button}
          type="button"
          data-rate={bad}
          onClick={onLeaveFeedback}
        >
          Bad
        </button>
      </div>
    </div>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.instanceOf(Array).isRequired,
};
export default FeedbackOptions;
