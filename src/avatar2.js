import styles from "./Avatar.module.css";
import PropTypes from "prop-types";

const Avatar = ({imgAvatar, badgeColor}) => {
  const dimension = {
    height: "120px",
    width: "120px",
  };

  return (
    <div className={styles.avatar}>
      <svg role="none" style={dimension}>
        <mask id="circle">
          <circle cx="60" cy="60" fill="white" r="60"></circle>
          { badgeColor && (
            <circle cx="102" cy="102" fill="black" r="15"></circle>)}
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
          <circle className={styles.border} cx="60" cy="60" r="60"></circle>
        </g>
      </svg>
      <div className={styles.badge} style={{ background: badgeColor}}></div>
    </div>
  );
};

Avatar.propTypes = {
 imgAvatar : PropTypes.string,
};
Avatar.defaultProps= {
  imgAvatar : "../public/avatar_default.png",
};

export default Avatar;
