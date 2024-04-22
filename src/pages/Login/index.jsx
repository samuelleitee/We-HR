import React from "react";
import { Input } from "../../components/Input";
import { LoginButton } from "../../components/LoginButton";
import {
  TrianLeft,
  TrianRight,
  Logo,
  PointsLeft,
  PointsRight,
} from "../../components/IconLogin";
import { Routes, Route, useNavigation } from "react-router-dom";
import { TextLogo } from "../../components/TextLogo";
import { Oauth } from "../../components/Oauth";

import styles from "./styles.module.css";

export function Login() {
  return (
    <main className={styles.container}>
      <section className={styles.illustration}>
        <div className={styles.topTriangle}>
          <TrianRight />
        </div>

        <div className={styles.pointsRight}>
          <PointsLeft />
          <PointsLeft />
          <PointsLeft />
        </div>

        <div className={styles.logo}>
          <h1>See your human resources in real time</h1>
          <Logo />
        </div>

        <div className={styles.bottomTriangle}>
          <TrianLeft />
        </div>

        <div className={styles.pointsLeft}>
          <PointsRight />
          <PointsRight />
          <PointsRight />
        </div>
      </section>

      <section>
        <TextLogo />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Login</h1>
                <LoginForm />
              </>
            }
          />
          <Route
            path="/password-recovery"
            element={
              <>
                <h1 className={styles.loginTitle}>Password Recovery</h1>
                <PasswordRecoveryForm />
              </>
            }
          />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </section>
    </main>
  );
}

function LoginForm() {
  // const navigation = useNavigation();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleNavigate = () => {
    // navigation.navigate("/password-recovery")
  };

  return (
    <form action="">
      <div>
        <Input name="email" type="email" placeholder="example@example" />
        <Input
          name="password"
          type="password"
          placeholder="8 - 10 characters"
        />
      </div>

      <div className={styles.buttonContainer}>
        <LoginButton text="LOGIN" dark type="submit" onClick={handleSubmit} />
        <LoginButton
          text="FORGET PASSWORD?"
          type="button"
          onClick={handleNavigate}
        />
      </div>
      <Oauth />
    </form>
  );
}

function PasswordRecoveryForm() {
  // const navigation = useNavigation();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleNavigate = () => {
    // navigation.navigate("/login")
  };

  return (
    <form action="">
      <div>
        <Input name="email" type="email" placeholder="example@example" />
        <Input
          name="password"
          type="password"
          placeholder="8 - 10 characters"
        />
      </div>

      <div className={styles.buttonContainer}>
        <LoginButton
          text="RECOVER PASSWORD"
          dark
          type="submit"
          onClick={handleSubmit}
        />
        <LoginButton
          text="BACK TO LOGIN"
          type="button"
          onClick={handleNavigate}
        />
      </div>
      <Oauth />
    </form>
  );
}

function SignIn() {
  // const navigation = useNavigation();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleNavigate = () => {
    // navigation.navigate("/password-recovery")
  };

  return (
    <form action="">
      <Input name="email" type="email" placeholder="example@example" />
      <Input name="senha" type="password" placeholder="8 - 10 characters" />

      <div className={styles.buttonContainer}>
        <LoginButton text="SIGN IN" dark type="submit" onClick={handleSubmit} />
      </div>

      <Oauth />
    </form>
  );
}
