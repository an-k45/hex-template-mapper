import React from 'react';
import { Container, Divider } from 'semantic-ui-react';

import HexConfig from './HexConfig';
import ImageConfig from './ImageConfig';
import ExportConfig from './ExportConfig';

function ConfigPanel() {
  // Helpful: https://www.robinwieruch.de/react-semantic-ui-tutorial/
  return (
    <Container textAlign='center'>
      <HexConfig />
      <Divider />
      <ImageConfig />
      <Divider />
      <ExportConfig />
    </Container>
  );
}

export default ConfigPanel;
