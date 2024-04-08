import React from "react";
import { Input } from "../../components/Input"
import { LoginButton } from "../../components/LoginButton";

export function Login() {
  return (
    <main>
      <section></section>
      
      <section>
        <form action="">
          <Input name="email" type="email" placeholder="example@example"/>
          <Input name="password" type="password" placeholder="8 - 10 characters" />
          <LoginButton text="LOGIN" dark type="submit" />
          <LoginButton text="FORGET PASSWORD?" type="button"/>
        </form>
      </section>
    </main>
  );
}
