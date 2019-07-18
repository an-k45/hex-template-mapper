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
      backgroundURL: '',
      backgroundX: '50%',
      backgroundY: '50%',
      backgroundAutoAlignX: true,
      backgroundSize: '100%'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    let {name, value, type, checked, files} = event.target;
    // console.log("name: " + name + ", value: " + value + ", checked: " + checked);
    if (["backgroundX", "backgroundY", "backgroundSize"].includes(name)) value = `${value}%`;

    if (type === "checkbox") {
      this.setState({ [name]: checked });
    } else if (type === "file") {
      this.setState({ [name]: URL.createObjectURL(files[0]) });
    } else {
      this.setState({ [name]: value });
    }
  }

  render() {
    // Background image help from https://stackoverflow.com/questions/31353703/how-to-upload-image-file-from-computer-and-set-as-div-background-image-using-jqu
    const bodyColumnStyles = {
      backgroundImage: `url(${this.state.backgroundURL})`,
      backgroundPosition: `${this.state.backgroundX} ${this.state.backgroundY}`,
      backgroundRepeat: "no-repeat",
      backgroundSize: this.state.backgroundAutoAlignX ? `auto ${this.state.backgroundSize}` : `${this.state.backgroundSize} auto`,
      transform: `rotate(${this.state.backgroundAngle}deg)`,
      padding: 0
    };
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
