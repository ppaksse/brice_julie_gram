import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import PhotoDisplay from "components/PhotoDisplay";
import ProfileDisplay from "components/ProfileDisplay";

const Profile = (props, context) => {
  return (
    <div className={styles.profile}>
      <div className={styles.section}>
        {props.loading && <Loading />}
        <div className={styles.content}>
          {!props.loading && <RenderProfile userProfile ={props.userProfile} />}
        </div>
      </div>
      <div className={styles.section}>
        {props.loading && <Loading />}
        <div className={styles.content}>
          {!props.loading && (<RenderImage userImages={props.userProfile.images} />)}
        </div>
      </div>
    </div>
  );
};

const RenderProfile = props => (
    <ProfileDisplay userProfile={props.userProfile} key={props.userProfile.id} />
);

const RenderImage = props =>
  props.userImages.map(photo => (<PhotoDisplay photo={photo} key={photo.id} />
  ));

Profile.contextTypes = {
  t: PropTypes.func.isRequired
};

// Profile.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   userProfile: PropTypes.shape({
//     id: PropTypes.isRequired,
//     profile_image: PropTypes.string.inumbersRequired,
//     username: PropTypes.string.isRequired,
//     post_count: PropTypes.number.isRequired,
//     followers_count: PropTypes.number.isRequired,
//     following_count: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     images:PropTypes.array.isRequired,
//   }).isRequired
// };

// Profile.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   userProfile: PropTypes.array,
//   userImages: PropTypes.array
// };



export default Profile;