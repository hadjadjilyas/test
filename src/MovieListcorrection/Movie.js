import styled from "styled-components";
import { PropTypes } from 'prop-types';

const Movie = ({
  id, title, date, category, 
  resume, like, nbLike, comment, 
  bookmark, trailer, image, dispatch}) => {

  // gestion de la date
  const datePart = date.split(' ');

  // gestion du bookmark
  let bookmarkClass = bookmark ? 'fa fa-bookmark' : 'fa fa-bookmark-o';

  // gestion du bookmark
  let likeClass = like ? 'fa fa-heart' : 'fa fa-heart-o';

  return ( 
    <CardDiv>
      <div className="wrapper" style={{ backgroundImage: `url(${image})`}}>
        <div className="header">
          <div className="date">
            <span className="day">{ datePart[0] }</span>
            <span className="month">{ datePart[1] }</span>
            <span className="year">{ datePart[2] }</span>
          </div>
          <ul className="menu-content">
            <li>
              <a href="#" className={ bookmarkClass } 
                 onClick={()=>dispatch({type: 'TOGGLE_BOOKMARK', movieId : id })}></a>
            </li>
            <li>
              <a href="#" className={ likeClass }>
                <span>{ nbLike }</span>
              </a>
            </li>
            <li>
              <a href="#" className="fa fa-comment-o">
                <span>{ comment }</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="data">
          <div className="content">
            <span className="author">{ category }</span>
            <h1 className="title">
              <a href="#">{ title }</a>
            </h1>
            <p className="text">
              { resume }
            </p>
            <a href={trailer} className="button" target="_blank">
              Trailer
            </a>
          </div>
        </div>
      </div>
    </CardDiv>
   );
}

// Props types

Movie.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string, 
  date: PropTypes.string, 
  category: PropTypes.string, 
  resume: PropTypes.string,
  like: PropTypes.bool,
  nbLike: PropTypes.number,
  comment: PropTypes.number, 
  bookmark: PropTypes.bool,
  trailer: PropTypes.string, 
  image: PropTypes.string,
  dispatch: PropTypes.func
}

const CardDiv = styled.div`
  float: left;
  padding: 1.7rem;
  width: 42%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Open Sans", sans-serif;

  & * {
    box-sizing: border-box;
  }

  & a {
    text-decoration: none;
  }

  & h1 {
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
  }

  & .menu-content {
    margin: 0;
    padding: 0;
    list-style-type: none;
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
  }
  & .menu-content a {
    color: #fff;
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
  }
  & .wrapper {
    background-color: #fff;
    background-position: center;
    background-size: cover;
    min-height: 540px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);
  }
  & .wrapper:hover .data {
    -webkit-transform: translateY(0);
    transform: translateY(0);
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
  & .text {
    height: 120px;
    margin: 0;
  }
  & input[type="checkbox"] {
    display: none;
  }
  & input[type="checkbox"]:checked + .menu-content {
    -webkit-transform: translateY(-60px);
    transform: translateY(-60px);
  }

  & .wrapper {
    background-size: cover;
  }

  & .wrapper:hover .menu-content span {
    -webkit-transform: translate(-50%, -10px);
    transform: translate(-50%, -10px);
    opacity: 1;
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
  & .menu-content {
    float: right;
  }
  & .menu-content li {
    margin: 0 5px;
    position: relative;
  }
  & .menu-content span {
    transition: all 0.3s;
    opacity: 0;
  }
  & .data {
    color: #fff;
    -webkit-transform: translateY(calc(120px + 4em));
    transform: translateY(calc(120px + 4em));
  }
  & .title a {
    color: #fff;
  }
  & .date span {
    margin-right: 5px;
  }
  & .button {
    display: block;
    width: 100px;
    margin: 2em auto 1em;
    text-align: center;
    font-size: 12px;
    color: #fff;
    line-height: 1;
    position: relative;
    font-weight: 700;
  }
  &:hover {
      text-decoration: underline;
  }
`;
 
export default Movie;