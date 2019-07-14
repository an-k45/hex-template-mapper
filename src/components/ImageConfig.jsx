import React from 'react';
import { Input, Form, Button } from 'semantic-ui-react';

function ImageConfig() {
  return (
    <Form>
      <h2>Images</h2>
      <Form.Field>
        <label>Upload image</label>
        <Button icon='upload' />
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
