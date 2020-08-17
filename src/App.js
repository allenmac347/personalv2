import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Menu, Grid, Container, List, Header, Image} from 'semantic-ui-react'


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
    <Container>
    <Grid >
      <Grid.Row centered columns={2}>
        <Grid.Column width={4}>
          <Header as='h2'>My name is Allen Macaspac and welcome to my page!</Header>
        </Grid.Column>
        <Grid.Column width={3}>
          <p>This is a placeholder</p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <br></br>
        <br></br>
      </Grid.Row>
      <Grid.Row centered columns={1}>
        <Grid.Column width={4}>
          <Header as='h4'>I am an aspiring Software Engineer based in Ann Arbor interested in computer optimization and clean UI.</Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Container>
  );
}

function ContentSection(){
  return(
    <Grid relaxed divided='vertically' textAlign='center'>
      <Grid.Row columns={1} verticalAlign='middle'>
        <Grid.Column>
          <Welcome />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1}>
        <Grid.Column stretched>
            <br></br>
            <br></br>
            <br></br>
            <Education />
            <br></br>
            <br></br>
            <br></br>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1}>
        <Grid.Column>
            <br></br>
            <br></br>
            <br></br>
            <Tech />
            <br></br>
            <br></br>
            <br></br>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1}>
        <Grid.Column>
            <Project />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1}>
        <Grid.Column>
          <div style={{height:'10vh'}}>
            <Contact/>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

function Education(){
  return(
    <Container>
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column>
            <EducationContent/>
          </Grid.Column>
            <Grid.Column>
              <p>This is just a placeholder</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

function EducationContent(){
  return(
    <Container>
      <h2>Educational Background</h2>
      <p>I am currently a rising senior at the Universiy of Michigan graduating this December 2020.</p>
      <p>I've taken course work in Data Structures and Algorithms, Operating Systems, and Web App Development.</p>
      <p>Outside the classroom, I also like to code in my free time, whether it's working on personal projects or solving leetcode problems.</p>
    </Container>
  );
}


function Tech(){
  return(
    <Container>
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column>
            <p>This is just a placeholder</p>
          </Grid.Column>
            <Grid.Column>
              <TechContent/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

function TechContent(){
  return(
    <Container>
      <h2>Technology Experience</h2>
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
