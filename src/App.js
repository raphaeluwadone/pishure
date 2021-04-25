
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {GlobalStyles} from './GlobalStyles';

function App() {
  return (
    <Wrapper>
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
    </Wrapper>
    
  );
}

const Wrapper = styled.div`
   max-width: 83rem;
   margin: 0 auto;
`

export default App;
