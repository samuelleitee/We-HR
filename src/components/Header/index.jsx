import { Link } from "react-router-dom";
import bell from "../../assets/ic_bell.svg";
import message from "../../assets/ic_message.svg";
import profile from "../../assets/ic_profile.svg";
import arrow from "../../assets/ic_arrow.svg";
import search from "./../../assets/ic_search.svg"

import styles from "./styles.module.css";

export function Header({ nome, showMenu, setShowMenu }) {
  return (
    <header className={styles.container}>
      <div className={styles.menudiv}>

        <div className={styles.menu} onClick={() => setShowMenu(!showMenu)} style={showMenu ? { zIndex: 10, left: "90px", height: "fit-content" } : null}>
          <div className={styles.line} style={showMenu ? { display: "none" } : null}></div>
          <div className={styles.line} style={showMenu ? { transform: 'rotate(45deg)', position: "absolute" } : null}></div>
          <div className={styles.line} style={showMenu ? { transform: 'rotate(-45deg)', position: "absolute" } : null}></div>
        </div>

        <img src={search} alt="" />

        <input type="text" placeholder="Search" className={styles.input} />
      </div>

      <div className={styles.profile}>
        <Link>
          <img src={bell} />
        </Link>
        <Link>
          <img src={message} />
        </Link>

        <div className={styles.user}>
          <img src={profile} />
          <div className={styles.name}>
            <h3>{nome}</h3>
            <Link>
              <img src={arrow} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
