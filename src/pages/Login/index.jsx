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
import styles from "./styles.module.css";

import { Routes, Route, useNavigation } from "react-router-dom";
import { TextLogo } from "../../components/TextLogo";

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
          <Route path="/" element={<LoginForm />} />
          <Route path="/password-recovery" element={<PasswordRecoveryForm />} />
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
      <Input name="email" type="email" placeholder="example@example" />
      <Input name="password" type="password" placeholder="8 - 10 characters" />

      <div className={styles.buttonContainer}>
        <LoginButton text="LOGIN" dark type="submit" onClick={handleSubmit} />
        <LoginButton
          text="FORGET PASSWORD?"
          type="button"
          onClick={handleNavigate}
        />
      </div>
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
      <Input name="email" type="email" placeholder="example@example" />
      <Input name="password" type="password" placeholder="8 - 10 characters" />

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
    </form>
  );
}
