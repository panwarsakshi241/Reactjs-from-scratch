import React from 'react';

function DisplayCustomerFunction(props) {
    return (
      <div>
        <p>{props.name} ({props.email})</p>
      </div>
    );
  }


export default DisplayCustomerFunction;