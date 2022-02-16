import React from "react";
import styles from "./Botton.module.scss";
export default function TableBotton(props) {
  return <div className={styles.tableBotton}>{props.title}</div>;
}
