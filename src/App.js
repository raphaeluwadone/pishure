import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {GlobalStyles} from './GlobalStyles';
import styled from 'styled-components/macro';

import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
    <Wrapper>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/login">
            <Login />
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
