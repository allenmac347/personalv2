import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Menu, Grid, Container, List, Header} from 'semantic-ui-react'


class App extends React.Component {
  render(){
    return (
      <Container fluid>
        <NavigationBar/>
        <ContentSection/>
      </Container>
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
      <Menu inverted fluid size='medium'>
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
    );
  }
}


function Welcome(){
  return(
    <Grid >
      <Grid.Column>
        <Header as='h1'>My name is Allen Macaspac and welcome to my page!</Header>
        <Header as='h2'>I am an aspiring Software Engineer based in Ann Arbor interested in computer optimization and clean UI.</Header>
      </Grid.Column>
      <Grid.Column>
        <p>This is a placeholder</p>
      </Grid.Column>
    </Grid>
  );
}

function ContentSection(){
  return(
    <Grid divided='vertically' textAlign='center'>
      <Grid.Row columns={1} verticalAlign='middle'>
        <Grid.Column>
          <Welcome />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1}>
        <Grid.Column>
          <About/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1}>
        <Grid.Column>
          <div style={{height:'50vh'}}>
            <Project />
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1}>
        <Grid.Column>
          <div style={{height:'25vh'}}>
            <Contact/>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

function About(){
  return(
    <Container>
      <h2>Education and Technical Background</h2>
      <p>I am currently a rising senior at the Universiy of Michigan graduating this December 2020.</p>
      <p>I've taken course work in Data Structures and Algorithms, Operating Systems, and Web App Development.</p>
      <p>Outside the classroom, I also like to code in my free time, whether it's working on personal projects or solving leetcode problems.</p>
      <p>Here are some of the technologies I am familiar with:</p>
      <Grid textAlign='center'>
        <Grid.Column>
          <List horizontal relaxed>
            <List.Item>
              <List.Content>
                <p>C++</p>
                <p>Python</p>
                <p>JavaScript</p>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <p>React</p>
                <p>HTML</p>
                <p>CSS</p>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <p>Flask</p>
                <p>Numpy</p>
                <p>MySQL</p>
              </List.Content>
            </List.Item>
          </List>
        </Grid.Column>
      </Grid>
    </Container>
  );
}
function Project(){
  return(
    <Container>
      <p>Test</p>
    </Container>
  );
}

function Contact(){
  return(
    <Container>
      <p>Test</p>
    </Container>
  );
}


export default App;
