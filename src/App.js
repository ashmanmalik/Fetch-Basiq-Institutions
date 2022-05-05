import React, { Component } from 'react';
import './App.css';
import FetchInstitutions from "./components/listInstitutions";

class App extends Component {

  render() { 
    return (
      <div className="App"> 
        <FetchInstitutions />
      </div>
    ); 
  } 
}

export default App;
