import React from "react";
import PropTypes from "prop-types";
import styles from "./Notifications.module.css";

const Notifications = ({ message }) => (
  <div className={styles.notifications}>{message}</div>
);
Notifications.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notifications;
