import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";
const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordlRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordlRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordlRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordlRef} />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          {" "}
          <span className="signUpScreen__gray"> New to Netflix?</span>{" "}
          <span className="signUpScreen__link" onClick={register}>
            Sign Up Now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
