import React from 'react';
import { Form, Input, Button, Container } from 'semantic-ui-react';

function parseCoordinates(coordObject) {
  let coordsString = "";
  for (let q in coordObject) {
    for (let r of coordObject[q]) {
      coordsString += `[${q}, ${r}, ${-q - r}], `;
    }
  }
  return coordsString.slice(0, -2);
}

function PrintCoordinates(props) {
  return (
    <Container textAlign="center">
      <Form>
        <Form.Field>
          <Button style={{margin: "10px"}} onClick={() => console.log(parseCoordinates(props.curCoords))}>Print Coordinates</Button>
        </Form.Field>
      </Form>
    </Container>
  );
}

export default PrintCoordinates;
