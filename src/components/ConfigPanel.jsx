import React from 'react';
import { Container, Divider } from 'semantic-ui-react';

import HexConfig from './HexConfig';
import ImageConfig from './ImageConfig';
import ExportConfig from './ExportConfig';

function ConfigPanel(props) {
  // Helpful: https://www.robinwieruch.de/react-semantic-ui-tutorial/
  return (
    <Container textAlign='center'>
      <HexConfig data={props.data} handleChange={props.handleChange} />
      <Divider />
      <ImageConfig data={props.data} handleChange={props.handleChange} />
      <Divider />
      <ExportConfig />
    </Container>
  );
}

export default ConfigPanel;
