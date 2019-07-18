import React from 'react';
import { Input, Form, Button } from 'semantic-ui-react';

function ImageConfig(props) {
  return (
    <Form>
      <h2>Images</h2>
      <Form.Field>
        {/* Adapted from https://codepen.io/hartzis/pen/VvNGZP */}
        <Input
          name="backgroundURL"
          type="file"
          onChange={(event) => props.handleChange(event)}
        />
      </Form.Field>
      <Form.Field>
        <label>Auto align (x)</label>
        <Input
          name="backgroundAutoAlignX"
          type="checkbox"
          checked={props.data.backgroundAutoAlignX}
          onChange={props.handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Adjust size</label>
        <Input
          fluid
          type="range"
          name="backgroundSize"
          onChange={(event) => props.handleChange(event)}
        />
      </Form.Field>
      <Form.Field>
        <label>Position (x)</label>
        <Input
          fluid
          name="backgroundX"
          type="range"
          onChange={(event) => props.handleChange(event)}
        />
      </Form.Field>
      <Form.Field>
        <label>Position (y)</label>
        <Input
          fluid
          name="backgroundY"
          type="range"
          onChange={(event) => props.handleChange(event)}
        />
      </Form.Field>
      <Form.Field>
        {/* TODO Prevent this from rotating child (hexes) */}
        <label>Rotate (angle)</label>
        <Input
          fluid
          name="backgroundAngle"
          type="range"
          value={props.data.backgroundAngle}
          onChange={(event) => props.handleChange(event)}
        />
      </Form.Field>
    </Form>
  );
}

export default ImageConfig;
