import React, { Component } from 'react';

class DisplayAddress extends Component {
  render() {
    return (
      <div>
        <p>{this.props.street}, {this.props.city}</p>
      </div>
    );
  }
}

export default DisplayAddress;