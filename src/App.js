import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component"; 

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello there!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Now!!!
        </a>
      </header>
    </div>
  );
} */
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };

    // this.handleChange = this.handleChange.bind(this);
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  // handleChange(e) {
  handleChange = e => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ) 
    // return(
    //   <div className="App">
    //     <input type="search" placeholder="search monsters" onChange={e =>
    //         this.setState({searchField: e.target.value}) 
    //     } />
    //     <CardList monsters={filteredMonsters}>
    //       /* {
    //         this.state.monsters.map(monster => (<h1 key={monster.id}>{monster.name}</h1>))
    //       } */
    //     </CardList>
    //   </div>
    // );
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          // handleChange={e => this.setState({searchField: e.target.value})}
          handleChange={this.handleChange} /> 
        <CardList monsters={filteredMonsters} />
      </div>
    );
  };
}

export default App;
