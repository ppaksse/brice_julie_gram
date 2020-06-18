import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  // static propTypes = {
  //   userProfile: PropTypes.object.isRequired,
  //   getUserProfile: PropTypes.func.isRequired
  // };

  static propTypes = {
    getUserProfile: PropTypes.func.isRequired,
    userProfile: PropTypes.array,    
  };
  
  componentDidMount() {
    const { getUserProfile } = this.props;
    getUserProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    const { getUserProfile } = this.props;
    if (prevProps.match.params !== this.props.match.params) {
      getUserProfile();
    }
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.userProfile) {
    this.setState({
      loading: false
      });
    }
  };

  render() {
    const { userProfile } = this.props;
    return(
     <Profile {...this.state} userProfile={userProfile}/>
    );
  }
}

export default Container;