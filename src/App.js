import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import { PrivateRoute } from "./components/PrivateRoute";

import {
  Login,
  Signup,
  ForgotPassword,
  SetPassword,
  MailSent,
} from "./pages/Authentication";

import Upload from "./pages/Upload";
import { useUserContext } from "./context/UserContext";

function App() {
  const { user, setUser } = useUserContext();

  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path='/signup'>
          <Signup />
        </Route>

        <Route
          path='/login'
          render={props => {
            return user ? <Redirect to={props.location} /> : <Login />;
          }}
        />

        <Route path='/forgotpassword'>
          <ForgotPassword />
        </Route>

        <Route path='/setpassword'>
          <SetPassword />
        </Route>

        <Route path='/mailsent'>
          <MailSent />
        </Route>

        <PrivateRoute user={user} path='/upload'>
          <Upload />
        </PrivateRoute>

        <Route path='*'>
          <h2>(404) Page not found</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
