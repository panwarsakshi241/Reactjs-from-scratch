import { ADDRESS_DATA, CUSTOMER_DATA } from "./data.js";
import DisplayAddressFunction from "./DisplayAddress";
import DisplayCustomerFunction from "./DisplayCustomerFunction.jsx";
import "./styles.css"; // Import your CSS file
import Table from "./Table.jsx";

function CustomerDetailsFunction(props) {
  const customerList = CUSTOMER_DATA.map((customerItem, index) => (
    <DisplayCustomerFunction key={index} {...customerItem} />
  ));
  const AddressList = ADDRESS_DATA.map((AddressItem, index) => (
    <DisplayAddressFunction key={index} {...AddressItem} />
  ));

  return (
    <div>
      <h3>{props.label}</h3>
      <Table columns={["Customers (Function Component)","Address (Function Component)"]} data={[customerList, AddressList]}/>
    </div>
  );
}

export default CustomerDetailsFunction;
