import React, { useEffect, useState } from 'react';
import { Container, Grid, Grow } from '@material-ui/core';

import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Grow in>
        <Container>
          <Grid container alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Form setCurrentId={setCurrentId} currentId={currentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
