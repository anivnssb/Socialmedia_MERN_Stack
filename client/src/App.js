import React, { useEffect, useState } from 'react';
import { Container, Grid, Grow } from '@material-ui/core';


import { getPosts } from './actions/posts';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth';

function App() {


  return (
    <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/auth' exact component={Auth}/>
      </Switch>
    </Container>
    </BrowserRouter>
  );
}

export default App;
