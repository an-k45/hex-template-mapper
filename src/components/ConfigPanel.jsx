import React from 'react';
import { Container, Divider } from 'semantic-ui-react';

import HexConfig from './HexConfig';
import ImageConfig from './ImageConfig';

function ConfigPanel(props) {
  // Helpful: https://www.robinwieruch.de/react-semantic-ui-tutorial/
  return (
    <Container textAlign='center'>
      <HexConfig data={props.data} handleChange={props.handleChange} />
      <Divider />
      <ImageConfig data={props.data} handleChange={props.handleChange} />
    </Container>
  );
}

export default ConfigPanel;
