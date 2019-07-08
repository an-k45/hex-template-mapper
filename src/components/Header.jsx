import React from 'react';
import { Container, Grid, Button } from 'semantic-ui-react';

import HeaderGrid from "./HeaderGrid";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container fluid style={headerStyles}>
        <Container>
          <HeaderGrid />
        </Container>
      </Container>
    );
  }
}

export default Header;

const headerStyles = {
  backgroundColor: "whitesmoke", // colors: https://www.w3schools.com/colors/colors_names.asp
  marginLeft: 0,
  marginRight: 0
};
