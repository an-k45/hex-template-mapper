import React from 'react';
import { Input } from 'semantic-ui-react';

// Adapted from https://codepen.io/hartzis/pen/VvNGZP
function ImageInput(props) {
  return (
    <Input
      type="file"
      onChange={(event) => props.handleImageChange(event)} />
  );
}

export default ImageInput;
