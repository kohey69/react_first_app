import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title/Title';

class App extends Component {

  onClickHandler = () => {
    let title = document.getElementById('versionStatement');
    let upgradeButton = document.getElementById('upgradeButton');

    title.textContent = "Hello World 4.0";
    upgradeButton.style.display = "none";
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title title="Propsで渡してみる" titleStyle={{color: 'orange'}} onClick={this.onClickHandler} >
            Hello World <span id="versionCounter" style={{borderBottom: '1px solid orange'}}>3.0</span>
          </Title>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
