import Navbar from './components/Navbar'
import { Home } from './components/home/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
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
