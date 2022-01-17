import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
type TRouteProps ={
  path:string,
  exact?:boolean
}
export const ProtectedRoute :React.FC<TRouteProps>=(props)=> {
  const { user } = useSelector((store:any) => store.profile);

  return (
    <Route
      {...props}
      render={({ location }) =>
        user ? (
          props.children
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
