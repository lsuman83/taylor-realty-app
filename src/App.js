import Navbar from './Navbar'
import Home from './Home'
import Login from './LoginNSignup/Login'
import Signup from './LoginNSignup/Signup'
import { BrowserRouter as Router,
          Switch,
          Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route 
            exact
            path='/'
            component={Home}
            />
          <Route
            exact
            path='/login'
            component={Login}
            />
          <Route
            exact
            path='/signup'
            component={Signup}
            />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
