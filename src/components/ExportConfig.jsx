import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

function ExportConfig(props) {
  return (
    <Form>
      <h2>Export</h2>
      <Form.Field>
        <Button>Export Coordinates</Button>
      </Form.Field>
    </Form>
  );
}

export default ExportConfig;
