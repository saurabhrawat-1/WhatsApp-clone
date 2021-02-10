import React, { useContext } from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { StateContext } from "./StateProvider";
import { actionsType } from "../reducer";

//Image Imports
import logo from "../Asset/whatsapp__logo.jpg";

function Login() {
  const globalState = useContext(StateContext);
  const { dispatch } = globalState;

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionsType.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="whatsapp-logo" />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
