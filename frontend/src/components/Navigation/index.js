import { connect } from "react-redux";
import Container from "./container";
import { push } from "react-router-redux";
import { actionCreators as userActions } from "redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const { username } = state.user;
  return {
    username
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      goToSearch: searchTerm => {
        dispatch(push(`/search/${searchTerm}`));
      },
      getNotifications: () => {
        dispatch(userActions.getNotifications());
      },
      goToProfile: username => {
        dispatch(push(`/${username}`));
      }
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Container);