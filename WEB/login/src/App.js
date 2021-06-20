import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome"
import { PrivateRoute } from './Auth/PrivateRoute'
function App() {
  return (
    <Router>
      <Switch>
          <Route exact path='/' component={Home} />
          <PrivateRoute exact path='/home' component={Welcome} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
      </Switch>
  </Router>
  );
}

export default App;
