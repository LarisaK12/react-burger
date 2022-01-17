import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../services/actions/profile";
import { getIngredients } from "../../services/actions/ingredients";
import ModalSwitch from "../modal-switch/modal-switch";
function App() {
  const {
    user,
    profileRequest,
    profileRequestFailed,
    setProfileRequest,
    regRequest,
    forgotPassRequest,
    resetPassRequest,
  } = useSelector((store:any) => store.profile);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (
      !user &&
      !profileRequest &&
      !profileRequestFailed &&
      !setProfileRequest &&
      !regRequest &&
      !forgotPassRequest &&
      !resetPassRequest
    )
      dispatch(getUser());
  }, [
    dispatch,
    user,
    profileRequest,
    profileRequestFailed,
    setProfileRequest,
    regRequest,
    forgotPassRequest,
    resetPassRequest,
  ]);
  React.useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}
export default App;
