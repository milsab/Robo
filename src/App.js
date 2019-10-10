import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
// import { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robos: []
    };
  }

  // ES2017 Promise Syntax
  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    this.setState({ robos: users });
  }

  // ES2015 Promise Syntax
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then(users => this.setState({ monsters: users }));
  // }

  render() {
    return (
      <div className="App">
        <input type="search" placeholder="search Robos" onChange="" />
        <CardList robos={this.state.robos} />
      </div>
    );
  }
}

export default App;
