import React from 'react';
import { Hex, HexGrid, Layout, Hexagon, GridGenerator, Text } from 'react-hexgrid';

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      regularHexes: {"0": [0]},
      addableHexes: {
        "0": [-1, 1],
        "1": [-1, 0],
        "-1": [1, 0]
      }
    };
  }

  handleRegularClick() { // TODO bind when we use state change
    console.log("You clicked a regular hex!");
  }

  handleAddableClick() {
    console.log("You clicked an addable hex!");
  }

  getHexArray(hexCoords) {
    let hexes = [];
    for (let q in hexCoords) {
      hexes.push(...hexCoords[+q].map(r => new Hex(+q, +r, -(+q)-(+r))))
    }
    return hexes
  }

  render() {
    const regularHexArray = this.getHexArray(this.state.regularHexes);
    const addableHexArray = this.getHexArray(this.state.addableHexes);
    return (
      <div style={{textAlign: 'center'}}>
        <HexGrid>
          <Layout>
            { regularHexArray.map((hex, i) => <Hexagon
                                                key={i}
                                                q={hex.q} r={hex.r} s={hex.s}
                                                onClick={this.handleRegularClick}
                                              />) }
            { addableHexArray.map((hex, i) => <Hexagon
                                                key={i}
                                                q={hex.q} r={hex.r} s={hex.s}
                                                onClick={this.handleAddableClick}
                                              />) }
          </Layout>
        </HexGrid>
      </div>
    );
  }
}

export default Body;
