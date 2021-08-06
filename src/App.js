import { Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import { PrivateRoute } from "./components/PrivateRoute";

import {
  Login,
  Signup,
  ForgotPassword,
  SetPassword,
  MailSent,
} from "./pages/Authentication";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import SearchResults from "./pages/Search/SearchResults";

function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/signup'>
          <Signup />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/forgotpassword'>
          <ForgotPassword />
        </Route>

        <Route path='/setpassword'>
          <SetPassword />
        </Route>

        <Route path='/mailsent'>
          <MailSent />
        </Route>

        <Route path='/search'>
          <SearchResults />
        </Route>

        <PrivateRoute path='/upload'>
          <Upload />
        </PrivateRoute>

        <Route path='*'>
          <h2>(404) Page not found</h2>
        </Route>
      </Switch>
    </>
  );
}

export default App;
