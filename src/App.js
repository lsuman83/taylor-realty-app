import React from 'react'
import { BrowserRouter as Router,
        Switch,
        Route } from 'react-router-dom'
import { Welcome } from './components/welcome'
import { Home } from './components/home/Home'
import Logout from './components/auth/Logout'
import withAuth from './components/auth/withAuth'

function App(){
  return (
      <div className="App">
        <Router>
          <Switch>
                <Route
                exact
                path='/login'
                component={() => <Welcome simple={true}/>}
                />
                <Route
                exact
                path='/signup'
                component={() => <Welcome simple={false}/>}
                />
                <Route
                exact
                path='/current_user'
                component={withAuth(Home)}
                />
                <Route
                exact
                path='/logout'
                component={Logout}
                />
            </Switch>
        </Router>
      </div>
  );
}

export default App;
