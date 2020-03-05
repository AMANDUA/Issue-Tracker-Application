import React from 'react';
import './App.css';

import Table from '../component/Table'
import Header from '../component/Header'
import data from '../tasks/task.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Table todos={data}/>
      </header>
    </div>
  );
}

export default App;
