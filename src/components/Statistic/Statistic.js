import React from "react";
import PropTypes from "prop-types";

const Statistic = ({ label, value }) => (
  <p className="feddbackItem">{`${label}: ${value}`}</p>
);
Statistic.defaultProps = {
  label: "feedback",
  value: 0,
};
Statistic.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
};
export default Statistic;
