import React from 'react';
import { Input, Form, Checkbox } from 'semantic-ui-react';

function HexConfig(props) {
  // TODO: Let action do handleChange
  return (
    <Form>
      <h2>Hexes</h2>
      <Form.Field>
        <label>Size</label>
        <Input
          fluid
          action={{ icon: 'redo' }}
          name='hexSize'
          type='number'
          value={props.data.hexSize}
          onChange={props.handleChange}
          step={0.1}
          min={0}
          max={20}
        />
      </Form.Field>
      <Form.Field>
        <label>Display Coordinates</label>
        <Input
          name='showCoords'
          type='checkbox'
          checked={props.data.showCoords}
          onChange={props.handleChange}
        />
      </Form.Field>
    </Form>
  );
}

export default HexConfig;
