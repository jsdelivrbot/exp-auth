import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div className="">
        <h1 className="">Dashboard</h1>

        <div className="alert alert-success">{this.props.message}</div>          
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.dashboard.message
  };
}

export default connect(mapStateToProps, actions)(Dashboard);
