import styled from "styled-components";
const ContactForm = () => {
  
    const WrapDIv = styled.div`
    position: absolute;
    width: 100%;
    max-width: 460px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 50px;
    overflow: hidden;

        & .title {
    display: block;
    color: #4d4d4d;
    font-weight: 100;
    font-size: 34px;
    text-align: center;
    height: 40px;
    line-height: 34px;
    margin-bottom: 10px;
    }
    & .name {
    margin: 10px 0 0;
    position: relative;
    width: 100%;
    }
    & form {
    background: #f2f2f2;
    width: 100%;
    min-width: 330px;
    padding: 20px 25px;
    border-radius: 4px;
    }
    & form input,
    & form textarea {
    display: block;
    width: 100%;
    margin: 0 0 20px;
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 2px;
    background: #fff;
    font-size: 17px;
    font-weight: lighter;
    outline: 0;
    transition: border-color 0.3s ease-in-out;
    color: #333;
    }
    & form input:focus,
    & form textarea:focus {
    transition: border-color 0.3s ease-in-out;
    border-color: #4d4d4d;
    background: rgba(255, 255, 255, 0.8);
    }
    & form textarea {
    resize: none;
    height: 120px;
    }
    & form button {
    display: block;
    height: 40px;
    background: #fff;
    border: 1px solid #4d4d4d;
    border-radius: 40px;
    cursor: pointer;
    color: #4d4d4d;
    padding: 10px 0;
    outline: 0;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    margin: 0 auto;
    transition: all 0.25s;
    width: 300px;
    }
    & form button:hover {
    color: white;
    background: #4d4d4d;
    transition: all 0.25s;
    }
    & form button:active {
    color: #1a1a1a;
    transition: all 0.25s;
    }
    & form button:after {
    content: "SUBMIT";
    letter-spacing: 2px;
    }
    *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
    *::-webkit-input-placeholder {
    color: #a7a7a7;
  }

  *:-moz-placeholder {
    color: #a7a7a7;
  }

  *::-moz-placeholder {
    color: #a7a7a7;
  }

  *:-ms-input-placeholder {
    color: #a7a7a7;
  }
    
    @media screen and (min-width: 651px) {
      & {
    width: 650px;
    max-width: none;
  }
  & .title {
    text-align: left;
  }
  & input:first-child {
    float: left;
    width: 290px;
  }
  & input:nth-child(2) {
    float: right;
    width: 290px;
  }
    }
  `;

    return ( 
        <WrapDIv>
            <form action="">
                <div className="title">Contact Us</div>
                <div className="name-wrapper">
                    <input
                        type="text"
                        name="first-name"
                        placeholder="First Name"
                        autoFocus="autofocus"
                        required
                    />
                    <input
                        type="text"
                        name="last-name"
                        placeholder="Last Name"
                        required
                    />
                </div>
                <input type="email" name="email" placeholder="Email" required />
                <textarea
                    name="comment"
                    form="cform"
                    placeholder="Message"
                    required
                />
                <button id="submit" name="submit" type="submit"></button>
            </form>
        </WrapDIv>
     );
}
 
export default ContactForm;