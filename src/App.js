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

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { robos, searchField } = this.state;
    const filteredRobos = robos.filter(robo =>
      robo.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 class="code">Robos</h1>
        <SearchBox
          placeHolder="Search Robos"
          handleChange={this.handleChange}
        />
        <CardList robos={filteredRobos} />
      </div>
    );
  }
}

export default App;
