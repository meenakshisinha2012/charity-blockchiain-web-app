import Web3 from "web3";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { account: "" };
  }

  //Component life cycle method : that gets called before render()
  componentWillMount() {
    this.loadBlockchainData();
  }

  //to connect to metamask wallet
  async loadBlockchainData() {
    // "Web3.providers.givenProvider" will be set if in an Ethereum supported browser.
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8546");
    const network = await web3.eth.net.getNetworkType();
    await window.ethereum.enable();
    console.log("Network: ", network);
    const accounts = await web3.eth.getAccounts();
    console.log("account Number : ", accounts);
    this.setState({ account: accounts[0] });
  }

  render() {
    return (
      <div className="container">
        <h1>Hello World!!</h1>
        <p>Your account: {this.state.account}</p>
      </div>
    );
  }
}

export default App;
