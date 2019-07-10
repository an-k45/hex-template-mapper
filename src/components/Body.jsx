import React from 'react';
import { Hex, HexGrid, Layout, Hexagon, GridGenerator, Text } from 'react-hexgrid';

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      regularHexCoords: {"0": [0]},
      addableHexCoords: {
        "0": [-1, 1],
        "1": [-1, 0],
        "-1": [1, 0]
      }
    };
    this.handleRegularClick = this.handleRegularClick.bind(this);
    this.handleAddableClick = this.handleAddableClick.bind(this);
  }

  getNumberCoords(hex) {
    return {
      "q": +hex.q,
      "r": +hex.r,
      "s": +hex.s
    }
  }

  getAdjacentHexes(hex) {
    const {q, r, s} = this.getNumberCoords(hex);
    return [new Hex(q+1, r-1, s),
            new Hex(q+1, r, s-1),
            new Hex(q, r+1, s-1),
            new Hex(q-1, r+1, s),
            new Hex(q-1, r, s+1),
            new Hex(q, r-1, s+1)]
  }

  removeHex(hex, hexCoords) {
    const {q, r} = this.getNumberCoords(hex);
    hexCoords[q] = hexCoords[q].filter(rCoord => +rCoord != r);
    if (hexCoords[q].length == 0) {
      delete hexCoords[q];
    }
  }

  addHexes(hexArray, hexCoordsTarget, hexCoordsCheck) {
    for (let hex of hexArray) {
      let {q, r, s} = this.getNumberCoords(hex);
      if (!(q in hexCoordsTarget)) hexCoordsTarget[q] = [];
      // TODO Refactor
      if (!hexCoordsTarget[q].includes(r)) {
        try {
          if (!hexCoordsCheck[q].includes(r)) {
            hexCoordsTarget[q].push(r)
          }
        } catch (err) {
          hexCoordsTarget[q].push(r)
        }
      }
    }
  }

  handleRegularClick(hex) {
    console.log("Regular hex with " + `q: ${hex.q}, r: ${hex.r}, s: ${hex.s}`);
  }

  handleAddableClick(hex) {
    console.log("Addable hex with " + `q: ${hex.q}, r: ${hex.r}, s: ${hex.s}`);
    const adjacentHexes = this.getAdjacentHexes(hex);
    this.setState(prevState => {
      this.removeHex(hex, prevState.addableHexCoords);
      this.addHexes([hex], prevState.regularHexCoords, prevState.addableHexCoords);
      this.addHexes(adjacentHexes, prevState.addableHexCoords, prevState.regularHexCoords);
      return {
        regularHexCoords: prevState.regularHexCoords,
        addableHexCoords: prevState.addableHexCoords
      }
    })
  }

  getHexArray(hexCoords) {
    let hexes = [];
    for (let q in hexCoords) {
      hexes.push(...hexCoords[+q].map(r => new Hex(+q, +r, -(+q)-(+r))))
    }
    return hexes;
  }

  render() {
    const regularHexArray = this.getHexArray(this.state.regularHexCoords);
    const addableHexArray = this.getHexArray(this.state.addableHexCoords);
    return (
      <div style={{textAlign: 'center'}}>
        <HexGrid>
          <Layout>
            { regularHexArray.map((hex, i) => <Hexagon
                                                key={i}
                                                q={hex.q} r={hex.r} s={hex.s}
                                                onClick={() => this.handleRegularClick(hex)}
                                              />) }
            { addableHexArray.map((hex, i) => <Hexagon
                                                key={i}
                                                q={hex.q} r={hex.r} s={hex.s}
                                                onClick={() => this.handleAddableClick(hex)}
                                              />) }
          </Layout>
        </HexGrid>
      </div>
    );
  }
}

export default Body;
