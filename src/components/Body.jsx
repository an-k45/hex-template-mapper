import React from 'react';
import { Hex, HexGrid, Layout, Hexagon, GridGenerator, Text, HexUtils } from 'react-hexgrid';

class Body extends React.Component {
  constructor(props) {
    super(props);
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

  deleteHex(hex, hexCoords) {
    const {q, r} = this.getNumberCoords(hex);
    hexCoords[q] = hexCoords[q].filter(rCoord => +rCoord != r);
    if (hexCoords[q].length == 0) {
      delete hexCoords[q];
    }
  }

  addHex(hex, hexCoords) {
    const {q, r} = this.getNumberCoords(hex);
    if (!(q in hexCoords)) hexCoords[q] = [];
    if (!hexCoords[q].includes(r)) hexCoords[q].push(r);
  }

  swapHexToTarget(hex, inputCoords, targetCoords) {
    this.deleteHex(hex, inputCoords);
    this.addHex(hex, targetCoords);
  }

  isTargetHex(hex, targetCoords) {
    const {q, r} = this.getNumberCoords(hex);
    return q in targetCoords && targetCoords[q].includes(r)
  }

  isRegularHexAdjacent(hexArray, regularHexCoords) {
    for (let hexa of hexArray) {
      if (this.isTargetHex(hexa, regularHexCoords)) {
        return true;
      }
    }
    return false;
  }

  isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  handleRegularClick(hex) {
    // console.log("Regular hex with " + `q: ${hex.q}, r: ${hex.r}, s: ${hex.s}`);
    const adjacentHexes = this.getAdjacentHexes(hex);
    this.setState(prevState => {
      this.deleteHex(hex, prevState.regularHexCoords);
      if (this.isRegularHexAdjacent(adjacentHexes, prevState.regularHexCoords) ||
          this.isObjectEmpty(prevState.regularHexCoords)) {
        this.addHex(hex, prevState.addableHexCoords);
      }
      for (let hexa of adjacentHexes) {
        if (this.isTargetHex(hexa, prevState.addableHexCoords) &&
            !this.isRegularHexAdjacent(this.getAdjacentHexes(hexa), prevState.regularHexCoords)) {
          this.deleteHex(hexa, prevState.addableHexCoords);
        }
      }
      return {
        regularHexCoords: prevState.regularHexCoords,
        addableHexCoords: prevState.addableHexCoords
      }
    })
  }

  handleAddableClick(hex) {
    // console.log("Addable hex with " + `q: ${hex.q}, r: ${hex.r}, s: ${hex.s}`);
    const adjacentHexes = this.getAdjacentHexes(hex);
    this.setState(prevState => {
      this.swapHexToTarget(hex, prevState.addableHexCoords, prevState.regularHexCoords);
      for (let hexa of adjacentHexes) {
        if (!this.isTargetHex(hexa, prevState.addableHexCoords) && !this.isTargetHex(hexa, prevState.regularHexCoords)) {
          this.addHex(hexa, prevState.addableHexCoords);
        }
      }
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
    const { hexSize, showCoords } = this.props.data;
    return (
      <div style={{textAlign: 'center'}}>
        <HexGrid width={'100%'} height={'100%'}>
          <Layout size={{ x: hexSize, y: hexSize }}>
            { regularHexArray.map((hex, i) => {
              return (
                <Hexagon
                  key={i}
                  className={"regular"}
                  q={hex.q} r={hex.r} s={hex.s}
                  onClick={() => this.handleRegularClick(hex)}
                >
                  {showCoords ? <Text>{HexUtils.getID(hex)}</Text> : null}
                </Hexagon>
              );
            }) }
            { addableHexArray.map((hex, i) => <Hexagon
                                                key={i}
                                                className={"addable"}
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
