import React from "react";
import styles from "./SideBar.module.scss";
import { ReactComponent as Logo } from "assets/Logo.svg";
import { ReactComponent as People } from "assets/People.svg";
import { ReactComponent as Notifications } from "assets/Notifications.svg";
import { ReactComponent as Database } from "assets/Database.svg";
import { ReactComponent as Dashboard } from "assets/Dashboard.svg";
import { ReactComponent as Connect } from "assets/Connect.svg";

export default function SideBar() {
  const navLinks = [
    {
      icon: <People />,
      link: "",
    },
    {
      icon: <Connect />,
      link: "",
    },
    {
      icon: <Notifications />,
      link: "",
    },
    {
      icon: <Database />,
      link: "",
    },
    {
      icon: <Dashboard />,
      link: "",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.navLinksWrapper}>
        {navLinks.map((navlink) => (
          <span className={`${styles.navlink} ${styles.active}`}>
            {navlink.icon}
          </span>
        ))}
      </div>
    </div>
  );
}
