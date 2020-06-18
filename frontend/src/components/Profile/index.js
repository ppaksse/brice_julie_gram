import { connect } from "react-redux";
import { actionCreators as userActions } from "redux/modules/user";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { user: { userProfile }, routing: { location }  } = state;
  return {
    userProfile,
    location
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { match: { params: { username } } } = ownProps;
  return {
    getUserProfile: () => {
      dispatch(userActions.getUserProfile(username));
    }
  };
};

export default connect(mapStateToProps,  mapDispatchToProps)(Container);