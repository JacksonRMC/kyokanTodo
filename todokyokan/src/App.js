import React, { Component } from 'react';
import Header from './components/headers/';
import TaskBar from './components/taskbar/';
import TaskList from './components/taskList/';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TaskBar />
        <TaskList /> 
      </div>
    );
  }
}

export default App;
