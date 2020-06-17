import React from 'react';
import './App.css';
import { Router } from 'react-router-dom';
import history from './history';
import MainContainer from './components/MainContainer';

function App() {
  return (
   <Router history={history} forceeRefresh={true}>
     <MainContainer/>
   </Router>
  );
}

export default App;
