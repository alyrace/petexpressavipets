import { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Welcome from './pages/welcome/welcome';
import Home from './pages/home/home';

import './App.scss';



class App extends Component { 
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/Home' component={Home} />
        </Switch>
      </div>
    );
  }

}

export default App;
