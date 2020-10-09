import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import SearchParams from './components/SearchParams'
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: 2,
        title: 'Feed the cat',
        completed: true,
      },
      {
        id: 3,
        title: 'Yell AYAYA as much as you can',
        completed: false,
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}></Todos>
        <SearchParams></SearchParams>
      </div>
    );
  }
}
export default App;
