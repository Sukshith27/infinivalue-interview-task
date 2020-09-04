import React, { useEffect, useState } from 'react';
import '../App.css';
import Header from './header';
import data from '../feed/sample.json'
import { Spacer } from './spacer';
import { Title } from '../screens/titleScreen';
import { Information } from '../screens/information';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../screens/home';
import { Spinner } from 'react-bootstrap';


const App = () => {

  function LoadingContainer() {
    return (
      <div className='h-screen d-flex justify-content-center align-items-center'>
        <Spinner />
      </div>
    )
  }

  return (
    <React.Suspense fallback={<LoadingContainer />}>
      <BrowserRouter>
        <Switch>
          <Redirect to="/titles" from="/" exact />
          <Route path="/titles" exact component={Home} />
          <Route path="/titles/movie" component={Information} />
          <Route path="/titles/series" component={Information} />
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default App;