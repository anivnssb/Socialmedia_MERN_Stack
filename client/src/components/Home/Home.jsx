import { Container, Grid, Grow } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/posts'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import useStyles from './styles';

const Home = () => {
    const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  
  const [currentId, setCurrentId] = useState(0);
  return (
    <Grow in>
    <Container>
      <Grid container className={classes.mainContainer} alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={7}>
          <Posts setCurrentId={setCurrentId} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Form setCurrentId={setCurrentId} currentId={currentId} />
        </Grid>
      </Grid>
    </Container>
  </Grow>
  )
}

export default Home