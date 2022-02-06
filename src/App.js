import React, { Component } from 'react'
import './App.css';
import { CardListComponent } from './components/card-list/CardListComponent';
import { SearchBoxComponent } from './components/search-box/SearchBoxComponent'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBoxComponent
          placeholder='search monsters'
          handleChange={this.handleChange} />
        <CardListComponent monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
