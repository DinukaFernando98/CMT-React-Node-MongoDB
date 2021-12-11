import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getRole, getUserId } from './Common';

export default function EditorRoute({ component: Component, ...rest }) {
//   const userSignin = useSelector((state) => state.userSignin);
  const user_id = getUserId();
  const user_role = getRole();

  return (
    <Route
      {...rest}
      render={(props) =>
        user_id && user_role == "Editor" ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/login" />
        )
      }
    ></Route>
  );
}