import React from 'react';
import { Grid } from 'semantic-ui-react';

import Body from './components/Body';
import ConfigPanel from './components/ConfigPanel'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hexSize: 5,
      showCoords: false,
      backgroundURL: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target;
    // console.log("name: " + name + ", value" + value);
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  // TODO: Refactor into handleChange.
  handleImageChange(event) {
    event.preventDefault();
    const imageURL = URL.createObjectURL(event.target.files[0]);
    this.setState({ backgroundURL: imageURL });
  }

  render() {
    // Background image help from https://stackoverflow.com/questions/31353703/how-to-upload-image-file-from-computer-and-set-as-div-background-image-using-jqu
    const bodyColumnStyles = {
      backgroundImage: `url(${this.state.backgroundURL})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      padding: 0
    }
    // Adapted from https://stackoverflow.com/questions/48717904/how-to-make-a-semantic-ui-react-grid-full-screen-with-different-row-heights
    return (
      <Grid celled style={gridStyles}>
        <Grid.Column style={configColumnStyles} width={4}>
          <ConfigPanel data={this.state} handleChange={this.handleChange} handleImageChange={this.handleImageChange} />
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
