import React from 'react';
import { Grid } from 'semantic-ui-react';

import Body from './components/Body';
import ConfigPanel from './components/ConfigPanel'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hexSize: 5
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    console.log("name: " + name + ", value" + value);
    this.setState({
      [name]: value
    })
  }

  render() {
    // Adapted from https://stackoverflow.com/questions/48717904/how-to-make-a-semantic-ui-react-grid-full-screen-with-different-row-heights
    return (
      <Grid celled style={gridStyles}>
        <Grid.Column style={configColumnStyles} width={4}>
          <ConfigPanel data={this.state} handleChange={this.handleChange} />
        </Grid.Column>
        <Grid.Column style={bodyColumnStyles} width={12}>
          <Body data={this.state} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;

const gridStyles = {
  height: '100vh',
  overflow: 'auto',
  margin: 0
};

const configColumnStyles = {
  backgroundColor: "honeydew", // colors: https://www.w3schools.com/colors/colors_names.asp
};

const bodyColumnStyles = {
  padding: 0
}
