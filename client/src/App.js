import React, { useEffect, useState } from 'react';
import { Container, Grid, Grow } from '@material-ui/core';


import { getPosts } from './actions/posts';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Container>
    </BrowserRouter>
  );
}

export default App;
