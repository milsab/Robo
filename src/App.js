import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

// import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robos: [],
      searchField: ""
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
    const { robos, searchField } = this.state;
    const filteredRobos = robos.filter(robo =>
      robo.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="Search Robos"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList robos={filteredRobos} />
      </div>
    );
  }
}

export default App;
