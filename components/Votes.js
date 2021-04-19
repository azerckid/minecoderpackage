import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const VotesText = styled.Text`
  color: rgb(220, 220, 220);
  margin-bottom: 7px;
  font-weight: 500;
  font-size: 12px;
`;

const Votes = ({ votes }) => {
  return <VotesText>★ {votes} / 10</VotesText>;
};

Votes.propTypes = {
  votes: PropTypes.number.isRequired,
};

export default Votes;
