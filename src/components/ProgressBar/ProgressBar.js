/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS, SIZES } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Progress = styled.div`
  background-color: ${COLORS.gray50};
  height: auto;
  border-radius: 4px;
  padding: 0;
  width: 50%;
  display: block;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: ${props => props.size === 'large' ? '4px' : 0};
`;

const Bar = styled.div`
  width: ${(props) => props.progressValue}%;
  height: ${(props) => SIZES[props.size]}px;
  background-color: ${COLORS.primary};
  border: 1px ${COLORS.gray500} solid;
  border-radius: ${(props) =>
    props.progressValue === 100 ? "4px" : "4px 0 0 4px"};
`;

const ProgressBar = ({ value, size }) => {
  return (
    <>
      {value}
      <Progress
        role="progressbar"
        size={size}
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuetext="Working.."
      >
        <VisuallyHidden>{value}</VisuallyHidden>
        <Bar progressValue={value} size={size} />
      </Progress>
    </>
  );
};

export default ProgressBar;
