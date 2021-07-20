import { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Airlines from './pages/airlines/airlines';
import Welcome from './pages/welcome/welcome';
import Home from './pages/home/home';
import Users from './pages/api/users';

import './App.scss';


//import { withTheme } from '../../frontend/src/themes/Theme';

class App extends Component { 
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/welcome' component={Welcome} />
          <Route path='/airlines' component={Airlines} />
          <Route path='/api/users' component={Users} />
        </Switch>
      </div>
    );
  }

}

export default App;
