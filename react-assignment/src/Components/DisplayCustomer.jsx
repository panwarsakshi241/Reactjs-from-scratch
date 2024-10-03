import React, { Component } from 'react';

class DisplayCustomer extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name} ({this.props.email})</p>
      </div>
    );
  }
}

export default DisplayCustomer;