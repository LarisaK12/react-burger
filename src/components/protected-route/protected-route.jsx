import { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../services/actions/profile";

export function ProtectedRoute({ children, ...rest }) {
  const { user, profileRequest, profileRequestFailed } = useSelector(
    (store) => store.profile
  );

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!user && !profileRequest && !profileRequestFailed) dispatch(getUser());
  // }, [dispatch, user, profileRequest, profileRequestFailed]);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
