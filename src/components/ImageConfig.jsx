import React from 'react';
import { Input, Form, Button } from 'semantic-ui-react';

import ImageInput from './ImageInput';

function ImageConfig(props) {
  return (
    <Form>
      <h2>Images</h2>
      <Form.Field>
        <ImageInput handleImageChange={props.handleImageChange} />
      </Form.Field>
      <Form.Field>
        <label>Adjust size</label>
        <Input fluid type="range" />
      </Form.Field>
      <Form.Field>
        <label>Position (x)</label>
        <Input fluid type="range" />
      </Form.Field>
      <Form.Field>
        <label>Position (y)</label>
        <Input fluid type="range" />
      </Form.Field>
      <Form.Field>
        <label>Rotate (angle)</label>
        <Input fluid type="range" />
      </Form.Field>
    </Form>
  );
}

export default ImageConfig;
