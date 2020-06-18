import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const ProfileDisplay = (props,context) => {
  return(
    <div className={styles.profile}>
      <div className={styles.column}>
        <div className={styles.profileImg}>
          <img
            className={styles.imgWrap}
            src={props.userProfile.profile_image}
            alt={"Something else"}
            />
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.row}>
          <div className={styles.name}>
            {props.userProfile.username}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.text}>
            <span className={styles.textTitle}>{context.t("Posts")}</span>
            <span className={styles.textNumber}>
              {props.userProfile.post_count}
            </span>
          </div>
          <div className={styles.text}>
            <span className={styles.textTitle}>{context.t("Follower")}</span>
            <span className={styles.textNumber}>
              {props.userProfile.followers_count}
            </span>
          </div>
          <div className={styles.text}>
            <span className={styles.textTitle}>{context.t("Following")}</span>
            <span className={styles.textNumber}>
              {props.userProfile.following_count}
            </span>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.realName}>
            {props.userProfile.name}
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileDisplay.propTypes = {
  userProfile: PropTypes.shape({
    id: PropTypes.number.isRequired,
    profile_image: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    post_count: PropTypes.number.isRequired,
    followers_count: PropTypes.number.isRequired,
    following_count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    images:PropTypes.array.isRequired,
  }).isRequired
};

ProfileDisplay.contextTypes = {
  t: PropTypes.func.isRequired
};


export default ProfileDisplay;