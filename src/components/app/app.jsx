import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../services/actions/profile";
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
  } = useSelector((store) => store.profile);
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

  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}
export default App;
