import styles from "./styles.module.css";
import config from "../../assets/config.svg";

export function UpcomingSchedule({ message, time }) {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.text}>
          <h2 className={styles.message}>{message}</h2>
          <p className={styles.time}>{time}</p>
        </span>
        <img className={styles.config} src={config} />
      </div>
    </>
  );
}
