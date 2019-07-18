import React from 'react';
import { Input, Form, Button } from 'semantic-ui-react';

import ImageInput from './ImageInput';

function ImageConfig(props) {
  return (
    <Form>
      <h2>Images</h2>
      <Form.Field>
        <ImageInput handleChange={props.handleChange} />
      </Form.Field>
      <Form.Field>
        <label>Auto align (x)</label>
        <Input type="checkbox" name="backgroundAutoAlignX" checked={props.data.backgroundAutoAlignX} onChange={props.handleChange} />
      </Form.Field>
      <Form.Field>
        <label>Adjust size</label>
        <Input fluid type="range" name="backgroundSize" onChange={(event) => props.handleChange(event)} />
      </Form.Field>
      <Form.Field>
        <label>Position (x)</label>
        <Input fluid type="range" name="backgroundX" onChange={(event) => props.handleChange(event)} />
      </Form.Field>
      <Form.Field>
        <label>Position (y)</label>
        <Input fluid type="range" name="backgroundY" onChange={(event) => props.handleChange(event)} />
      </Form.Field>
      <Form.Field>
        <label>Rotate (angle)</label>
        <Input fluid type="range" />
      </Form.Field>
    </Form>
  );
}

export default ImageConfig;
