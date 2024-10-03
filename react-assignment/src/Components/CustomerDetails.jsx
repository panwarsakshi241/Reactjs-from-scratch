import React, { Component } from "react";
import DisplayCustomer from "./DisplayCustomer";
import DisplayAddress from "./DisplayAddress";
import "./styles.css"; // Import your CSS file
import { CUSTOMER_DATA, ADDRESS_DATA } from "./data.js";
import Table from "./Table.jsx";
class CustomerDetails extends Component {
  render() {
    const customerList = CUSTOMER_DATA.map((customerItem, index) => (
      <DisplayCustomer key={index} {...customerItem} />
    ));
    const AddressList = ADDRESS_DATA.map((AddressItem, index) => (
      <DisplayAddress key={index} {...AddressItem} />
    ));

    return (
      <div>
      <h3>{this.props.label}</h3>
      <Table columns={["Customers (Class Component)","Address (Class Component)"]} data={[customerList, AddressList]}/>
    </div>
    );
  }
}

export default CustomerDetails;
