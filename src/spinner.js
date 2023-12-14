import styled from "styled-components";
import { useState } from "react";

const Spinner = () => {
  const [count, setCount] = useState(0);
  const onadd = () => {
    setCount(count + 1);
  }
  const onmin = () => {
    setCount(count - 1);
  }
  return (
    <StyledDiv>
      <img onClick={onmin}
        src="https://alikinvv.github.io/stepper/build/img/arrow.svg"
        className="arrow top"
        alt="left arrow"
      />
      <div className="box">
        <div className="numbers1">{count}</div>
      </div>
      <img onClick={onadd}
        src="https://alikinvv.github.io/stepper/build/img/arrow.svg"
        className="arrow bottom"
        alt="right arrow"
      />
    </StyledDiv>
  );
};

// CSS (styled components)

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 80px;
  font-family: "Roboto", sans-serif;
  border-radius: 8px;
  position: relative;
  text-align: center;
  width: 300px;
  height: 119px;
  background-color: #ff6f72;



  

  & .arrow {
    width: 70px;
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    position: absolute;
  }

  & .arrow:hover {
    opacity: 1;
  }

  & .box {
    overflow: hidden;
    height: 92px;
    width: 150px;
    position: relative;
    margin: 0 20px;
  }

  & .box::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 20px;
    background: linear-gradient(
      to right,
      #ff6f72 0%,
      rgba(125, 185, 232, 0) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#ff6f72", endColorstr="#007db9e8",GradientType=1 );
    z-index: 1;
  }

  & .box::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 20px;
    background: linear-gradient(
      to right,
      #ff6f72 0%,
      rgba(125, 185, 232, 0) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#ff6f72", endColorstr="#007db9e8",GradientType=1 );
    z-index: 1;
    transform: rotate(180deg);
  }

  & .numbers1 {
    position: absolute;
    left: 5px;
    display: flex;
    transform: translateX(0);
    display: inline-block;
    letter-spacing: 1px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 140px;
  }

  & .top {
    transform: translateY(-50%);
    top: 59px;
    left: -11px;
  }

  & .bottom {
    transform: rotate(180deg) translateY(-50%);
    top: -12px;
    right: -11px;
  }
`;

export default Spinner;
