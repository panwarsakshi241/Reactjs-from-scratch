import React from "react";

function DisplayAddressFunction(props) {
  return (
    <div>
      <p>
        {props.street}, {props.city}
      </p>
    </div>
  );
}

export default DisplayAddressFunction;
