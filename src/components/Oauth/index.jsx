import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/ic_facebook.svg";
import google from "../../assets/ic_google.svg";
import windows from "../../assets/ic_windows.svg";
import styles from "./styles.module.css";

export function Oauth(){
  return (
    <div className={styles.container}>
      <p className={styles.text}>Login with</p>

      <div className={styles.links}>
        <Link to="/facebook"><img src={facebook} /></Link>
        <Link to="/google"><img src={google} /></Link>
        <Link to="/windows"><img src={windows} /></Link>
      </div>
    </div>
  );
}
