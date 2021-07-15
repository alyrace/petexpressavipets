import { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Airlines from './pages/airlines/airlines';
import Welcome from './pages/welcome/welcome';
import Home from './pages/home/home';

import './App.scss';

//import { withTheme } from '../../frontend/src/themes/Theme';

class App extends Component { 
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/Home' component={Home} />
          <Route path='/Airlines' component={Airlines} />
        </Switch>
      </div>
    );
  }

}

export default App;
