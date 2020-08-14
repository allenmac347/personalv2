import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {
  Menu
} from 'semantic-ui-react'

class App extends React.Component {
  render(){
    return (
      <div class='content'>
        <NavigationBar/>
        <Welcome/>
      </div>
    );
  }
}

class NavigationBar extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      active: 'none',
    };
  }

  render() {
    return(
      <div id='navbar'>
        <Menu inverted>
          <Menu.Item 
            header = {true}
            active = {this.state.active == 'main'}
            onClick={() => this.setState({active: 'main'})}
            name = 'AM'
            position = 'left'
          />
          <Menu.Item
            position = 'right'
            name='About Me'
            active={this.state.active == 'about'}
            onClick={() => this.setState({active: 'about'})}
          />
          <Menu.Item
            name='Projects'
            active={this.state.active == 'project'}
            onClick={() => this.setState({active: 'project'})}
          />
          <Menu.Item
            name='Contact'
            active={this.state.active == 'contact'}
            onClick={() => this.setState({active: 'contact'})}
          />
        </Menu>
      </div>
    );
  }
}

function Welcome(){
  return(
    <div id='welcomePage'>
      <h1>Welcome!</h1>
      <h2>My name is Allen Macaspac</h2>
    </div>
  );
}

export default App;
