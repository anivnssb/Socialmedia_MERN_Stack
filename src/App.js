import React from 'react';
import { AppBar, Container, Typography } from '@material-ui/core';

import memories from './images/memories.png';

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
        </Typography>
        <img src={memories} alt="memories" height="120" />
      </AppBar>
    </Container>
  );
}

export default App;
