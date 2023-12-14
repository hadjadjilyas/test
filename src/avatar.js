import styled from "styled-components";
import PropTypes from "prop-types";

// CSS (styled components)

const StyledDiv = styled.div`
  position: relative;
  box-sizing: border-box;
  position: relative;
  display: flex;
  margin-right: 12px;
  width: 120px;
`;

const StyledBadge = styled.div`
  position: absolute;
  right: 7px;
  bottom: 7px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
`;

const StyledCircle = styled.circle`
  stroke-width: 10;
  stroke: rgba(255, 255, 255, 0.4);
  fill: none;
`;

const Avatar = ({ imgAvatar, badgeColor }) => {
  const dimension = {
    height: "120px",
    width: "120px",
  };

  return (
    <StyledDiv>
      <svg role="none" style={dimension}>
        <mask id="circle">
          <circle cx="60" cy="60" fill="white" r="60"></circle>
          {badgeColor && (
            <circle cx="102" cy="102" fill="black" r="15"></circle>
          )}
        </mask>
        <g mask="url(#circle)">
          <image
            x="0"
            y="0"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            width="100%"
            xlinkHref={imgAvatar}
            style={dimension}
          />
          <StyledCircle cx="60" cy="60" r="60"></StyledCircle>
        </g>
      </svg>
      <StyledBadge style={{ background: badgeColor }}></StyledBadge>
    </StyledDiv>
  );
};

Avatar.propTypes = {
  imgAvatar: PropTypes.string,
  badgeColor: PropTypes.string,
};

Avatar.defaultProps = {
  imgAvatar: "../public/avatar_default.png",
};

export default Avatar;
