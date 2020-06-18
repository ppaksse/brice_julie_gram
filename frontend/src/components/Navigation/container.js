import React, { Component } from "react";
import PropTypes from "prop-types";
import Navigation from "./presenter";

class Container extends Component {
  state = {
    term: "",
    notification: false
  };
  static propTypes = {
    goToSearch: PropTypes.func.isRequired,
    getNotifications: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    goToProfile: PropTypes.func.isRequired
  };
  render() {
    const { term } = this.state;
    return (
      <Navigation
        onSubmit={this._onSubmit}
        onInputChange={this._onInputChange}
        value={term}
        notification={this.state.notification}
        handleNotification={this._handleNotification}
        goToProfile={this._goToProfile}
      />
    );
  }
  _onInputChange = event => {
    const { target: { value } } = event;
    this.setState({
      term: value
    });
  };
  _onSubmit = event => {
    const { goToSearch } = this.props;
    const { term } = this.state;
    event.preventDefault();
    goToSearch(term);
    this.setState({
      term: ""
    });
  };
  _handleNotification = () => {
    const { notification } = this.state;
    if (notification) {
      this.setState({
        notification: false
      });
    } else {
      this.props.getNotifications();
      this.setState({
        notification: true
      });
    }
  };
  _goToProfile = () => {
    const { goToProfile, username } = this.props;
    goToProfile(username);
  };
}
export default Container;