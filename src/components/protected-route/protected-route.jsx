import { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SET_ERROR } from "../../services/actions/error";
import { GetUser } from "../../services/actions/profile";

export function ProtectedRoute({ children, ...rest }) {
  const { user, profileRequestFailed, profileRequest } = useSelector(
    (store) => store.profile
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (profileRequestFailed)
      dispatch({
        type: SET_ERROR,
        error: "Не удалось узнать вас. Попробуйте авторизоваться.",
      });
    else if (!user) {
      dispatch(GetUser);
    }
  }, [dispatch, profileRequestFailed, user]);

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
