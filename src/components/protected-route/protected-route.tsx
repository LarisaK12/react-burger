import { Redirect, Route } from "react-router-dom";
import { useSelector } from "../../utils/hooks";
import React from "react";
type TRouteProps ={
  path:string,
  exact?:boolean
}
export const ProtectedRoute :React.FC<TRouteProps>=(props)=> {
  const { user } = useSelector((store) => store.profile);

  return (
    <Route
      {...props}
      render={() =>
        user? (
          props.children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
}
