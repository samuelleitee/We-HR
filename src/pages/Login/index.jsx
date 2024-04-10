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

export function Login() {
  return (
    <main>
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
        <form action="">
          <Input name="email" type="email" placeholder="example@example" />
          <Input
            name="password"
            type="password"
            placeholder="8 - 10 characters"
          />
          <LoginButton text="LOGIN" dark type="submit" />
          <LoginButton text="FORGET PASSWORD?" type="button" />
        </form>
      </section>
    </main>
  );
}
