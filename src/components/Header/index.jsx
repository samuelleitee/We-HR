import { Link } from "react-router-dom";
import bell from "../../assets/ic_bell.svg";
import message from "../../assets/ic_message.svg";
import profile from "../../assets/ic_profile.svg";
import arrow from "../../assets/ic_arrow.svg";
import styles from "./styles.module.css";

export function Header({nome}){
    return(
        <div className={styles.container}>
            <input type="text" placeholder="Search" className={styles.input}/>
            <div className={styles.profile}>
                <div className={styles.icons}>
                    <Link><img src={bell} /></Link>
                    <Link><img src={message} /></Link>
                </div>

                <div className={styles.menu}>
                    <img src={profile} />

                    <div className={styles.user}>
                        <h3 >{nome}</h3>
                        <Link><img src={arrow} /></Link>
                    </div>
                </div>            
            </div>
        </div>
    )
}