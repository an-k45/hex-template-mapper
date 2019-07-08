import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

function HeaderGrid() {
  return (
    <Grid padded>
      <Grid.Row>
        <Grid.Column width={12}>
          <h1>Hello World with JSX, Babel, and Webpack</h1>
        </Grid.Column>
        <Grid.Column width={4}>
          <div>
            <Button primary>Primary</Button>
            <Button secondary>Secondary</Button>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default HeaderGrid;
