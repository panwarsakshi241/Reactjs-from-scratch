import React, { Component } from 'react';
import './App.css';
import CustomerDetails from './Components/CustomerDetails';
import CustomerDetailsFunction from './Components/CustomerDetailsFunction';
import Button from './Components/Button';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {customerDet:"Please Click the button."};
    this.state = {buttonLabel:"Class Component"}
}
  handleClick(){
    if (this.state.buttonLabel === "Class Component"){
      this.setState({customerDet : <CustomerDetails label="Customer details (Class Component):"/>});
      this.setState({buttonLabel: "Function Component"})
    }
    else{
      this.setState({customerDet : <CustomerDetailsFunction label="Customer details (Function Component): "/>});
      this.setState({buttonLabel: "Class Component"})
    }
    
  }
  render(){

    return(
      <div>
        {this.state.customerDet}
        <Button label={this.state.buttonLabel} onSelect={this.handleClick.bind(this)}/>
      </div>
    )

  }
}

export default App;
