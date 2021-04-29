import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {GlobalStyles} from './GlobalStyles';
import styled from 'styled-components/macro';

import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword';
import SetPassword from './pages/SetPassword';
import MailSent from './pages/MailSent';

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

          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>

          <Route path="/setpassword">
            <SetPassword />
          </Route>

          <Route path="/mailsent">
            <MailSent />
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
