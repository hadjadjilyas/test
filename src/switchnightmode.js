import styled from "styled-components";

const Switch = () => {
    return ( 
        <div className="container">
        <div className='switch'></div>
        <label>Night</label>
      </div>
     );
}
 
const styleddiv = styled.div`
 {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    border-radius: 0;
  }

  body,
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body {
    margin: 0;
    height: 100vh;
    background-color: #061121;
    transition: 1s ease;
  }

  .container {
    margin: 0;
    padding: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  }
`;
const styledDiv = styled.div`
.switch {
    display: flex;
    margin-right: 20px;
    padding: 3.3333333333px;
    width: 80px;
    min-height: 40px;
    background-color: #235198;
    border-radius: 40px;
    cursor: pointer;
    transition: 0.4s ease;
  }

  .switch:before {
    content: "🌙";
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 50%;
    transition: 0.4s ease;
  }

  .switch.on {
    background-color: #03a9f4;
  }

  .switch.on:before {
    content: "☀️";
    transform: translateX(34px) rotate(180deg);
  }
`;
const styledlabel = styled.label`
 {
    font-family: sans-serif;
    font-size: 1.25rem;
    width: 60px;
  }
`;

export default Switch;