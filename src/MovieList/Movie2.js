import styled from "styled-components";
import PropTypes from "prop-types";
import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_BOOKMARK":
        return { ...state, bookmark: !state.bookmark };
      case "TOGGLE_LIKE":
        return { ...state, like: !state.like };
      case "INCREMENT":
        return {
          ...state,
          nbLike: state.like ? state.nbLike + 1 : state.nbLike - 1,
        };
      default:
        return state;
    }
};

const Carddiv = styled.div`

  float: left;
  padding: 1.7rem;
  width: 42%;

  & * {
    box-sizing: border-box;
  }

  & a {
    text-decoration: none;
    color: #fff;
  }

  & h1 {
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
  }

  & .menu-content {
    margin: 0;
    padding: 0;
    list-style-type: none;
    float: right;
  }

  & .menu-content::before,
  & .menu-content::after {
    content: "";
    display: table;
  }
  & .menu-content::after {
    clear: both;
  }
  & .menu-content li {
    display: inline-block;
    margin: 0 5px;
    position: relative;
  }
  & .menu-content button {
    color: #fff;
    background: none !important;
    border: none;
    padding: 0;
    cursor: pointer;
  }
  & .menu-content span {
    position: absolute;
    left: 50%;
    top: 0;
    font-size: 10px;
    font-weight: 700;
    font-family: "Open Sans";
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    transition: all 0.3s;
    opacity: 0;
  }

  & .wrapper {
    background-color: #fff;
    background-position: center;
    min-height: 540px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);
    background-size: cover;
  }
  & .wrapper:hover .data {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  & .wrapper:hover .menu-content span {
    -webkit-transform: translate(-50%, -10px);
    transform: translate(-50%, -10px);
    opacity: 1;
  }

  & .data {
    position: absolute;
    bottom: 0;
    width: 100%;
    -webkit-transform: translateY(calc(120px + 1em));
    transform: translateY(calc(120px + 1em));
    transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
    color: #fff;
    -webkit-transform: translateY(calc(120px + 4em));
    transform: translateY(calc(120px + 4em));
  }
  & .data .content {
    padding: 1em;
    position: relative;
    z-index: 1;
  }
  & .author {
    font-size: 12px;
  }
  & .title {
    margin-top: 10px;
  }

  & .title a {
    color: #fff;
  }
  & .date span {
    margin-right: 5px;
  }

  & .text {
    height: 70px;
    margin: 0;
  }
  & input[type="checkbox"] {
    display: none;
  }
  & input[type="checkbox"]:checked + .menu-content {
    -webkit-transform: translateY(-60px);
    transform: translateY(-60px);
  }

  & .header {
    color: #fff;
    padding: 1em;
  }
  & .header::before,
  & .header::after {
    content: "";
    display: table;
  }
  & .header::after {
    clear: both;
  }
  & .header .date {
    float: left;
    font-size: 12px;
  }

  & .button {
    display: block;
    width: 100px;
    margin: 6em auto 1em;
    text-align: center;
    font-size: 12px;
    color: #fff;
    line-height: 1;
    position: relative;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }
`;





const Movies = ({image, date, nbLike, comment, category, title, resume, trailer, id , like, bookmark }) =>
    {
        const [state, dispatch] = useReducer(reducer, {
          nbLike: nbLike,
          bookmark: bookmark,
          like: like,
        });
    
    return ( 
        <Carddiv>
          <div className="wrapper" style={{backgroundImage: `url(${image})`}}>
            <div className="header">
              <div className="date">
                <span> {date} </span>
              </div>
              <ul className="menu-content">
                <li>
                  <a href="#" 
                  onClick={() => dispatch({ type: "TOGGLE_BOOKMARK" })}
                className={
                  state.bookmark ? "fa fa-bookmark" : "fa fa-bookmark-o"
                }></a>
                </li>
                <li>
                  <a href="#"  className={state.like ? "fa fa-heart" : "fa fa-heart-o"}
                onClick={() => {
                  dispatch({ type: "TOGGLE_LIKE" });
                  dispatch({ type: "INCREMENT" });
                }}>
                    <span>{state.nbLike}</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="fa fa-comment-o">
                    <span>{comment}</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="data">
              <div className="content">
                <span className="author">{category}</span>
                <h1 className="title">
                  <a href="#">{title}</a>
                </h1>
                <p className="text">
                 {resume}
                </p>
                <a href={trailer} className="button" target="_blank">
                  Trailer
                </a>
              </div>
            </div>
          </div>
        </Carddiv>
     );
};
Movies.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    date : PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    resume: PropTypes.string.isRequired,
    like: PropTypes.bool.isRequired,
    nbLike: PropTypes.number.isRequired,
    comment: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired,
    trailer: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };


 
export default Movies;