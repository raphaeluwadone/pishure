import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {GlobalStyles} from './GlobalStyles';

function App() {
  return (
    <Router>
      <p>Welcome to Pishure App</p>
      <GlobalStyles />
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="signin">
          <Signin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
