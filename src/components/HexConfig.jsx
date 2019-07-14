import React from 'react';
import { Input, Form, Checkbox } from 'semantic-ui-react';

function HexConfig() {
  return (
    <Form>
      <h2>Hexes</h2>
      <Form.Field>
        <label>Size</label>
        <Input
          fluid
          action={{ icon: 'redo' }}
          type='number'
          defaultValue={10}
          step={0.1}
          min={0}
          max={20}
        />
      </Form.Field>
      <Form.Field>
        <label>Display Coordinates</label>
        <Checkbox toggle />
      </Form.Field>
    </Form>
  );
}

export default HexConfig;
