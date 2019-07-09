import React from 'react';
import { HexGrid, Layout, Hexagon, GridGenerator, Text } from 'react-hexgrid';

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      regularHexes: [],
      addableHexes: []
    };
  }

  handleRegularClick() {
    console.log("You clicked a regular hex!");
  }

  handleAddableClick() {
    console.log("You clicked an addable hex!");
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <HexGrid>
          <Layout>
            <Hexagon q={0} r={0} s={0} onClick={this.handleRegularClick} />
            <Hexagon q={0} r={-1} s={1} onClick={this.handleAddableClick} />
            <Hexagon q={1} r={-1} s={0} onClick={this.handleAddableClick} />
            <Hexagon q={1} r={0} s={-1} onClick={this.handleAddableClick} />
            <Hexagon q={0} r={1} s={-1} onClick={this.handleAddableClick} />
            <Hexagon q={-1} r={1} s={0} onClick={this.handleAddableClick} />
            <Hexagon q={-1} r={0} s={1} onClick={this.handleAddableClick} />
          </Layout>
        </HexGrid>
      </div>
    );
  }
}

export default Body;
