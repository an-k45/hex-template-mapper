import React from 'react';
import { Input } from 'semantic-ui-react';

// Adapted from https://codepen.io/hartzis/pen/VvNGZP
function ImageInput(props) {
  return (
    <Input
      type="file"
      name="backgroundURL"
      onChange={(event) => props.handleChange(event)} />
  );
}

export default ImageInput;
