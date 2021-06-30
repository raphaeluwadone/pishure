import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ path, user, children }) => {
  return (
    <Route
      path={path}
      render={({ location }) => {
        return user ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
};

export { PrivateRoute };
