import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { apiImage } from "../api";

const Pimage = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 5px;
  margin-top: 0px;
`;

const Poster = ({ url }) => {
  return <Pimage source={{ uri: apiImage(url) }} />;
};

Poster.propTypes = {
  url: PropTypes.string,
};
export default Poster;
