import React from 'react';
import { Grid, Button, Input, Form, Icon } from 'semantic-ui-react';

function HeaderInputs() {
  // Helpful: https://www.robinwieruch.de/react-semantic-ui-tutorial/
  return (
    <Grid padded className='center aligned'>
      <Grid.Row>
        <Grid.Column width={4}>
          <Input
            action={{ icon: 'redo' }}
            type='number'
            defaultValue={50}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button primary>Upload image</Button> {/* TODO: Add image drag OR sliders for zoom and moving. */}
        </Grid.Column>
        <Grid.Column width={4}>
          <Button primary>Export coordinates</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default HeaderInputs;
