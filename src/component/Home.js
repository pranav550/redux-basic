import React, { Component } from "react";
import { connect } from "react-redux";
import changeState from "../action/action";
class Home extends Component {
  changeState() {
    this.props.changeStateToAction();
  }
  render() {
    return (
      <div>
        <h1>Home {this.props.username}</h1>
        <button onClick={this.changeState.bind(this)}>changeState</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.rootReducer.username
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeStateToAction: () => {
      return dispatch(changeState());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
