import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Mern from './img/mern.jpeg';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
function App() {
  return (
    <Router>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={'/'} className="navbar-brand">Guilherme e Núbia</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={'/'} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={'/create'} className="nav-link">Create</Link>
            </li>
            <li className="nav-item">
              <Link to={'/index'} className="nav-link">Index</Link>
            </li>
          </ul>
        </div>
      </nav> <br/>

        <h2 className={'text-center'}>Aplicação MERN</h2>
        <img src={Mern} style={{width:650, height:372, marginLeft:'20%'}}/>
        
      <Switch>
          <Route exact path='/create' component={ Create } />
          <Route path='/edit/:id' component={ Edit } />
          <Route path='/index' component={ Index } />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
