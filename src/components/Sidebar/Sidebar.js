import React from "react";
import { Link } from "react-router-dom";
import { home, wallet, marketplace, explore } from "../../images/image.js";
import styles from "./styles.module.css";

const Sidebar = ({ showSidebar }) => {
  const navItems = [
    { icon: wallet, navItem: "Wallet", to: "#" },
    { icon: marketplace, navItem: "Marketplace", to: "#" },
    { icon: explore, navItem: "Explore", to: "#" },
  ];
  return (
    <div className={` ${styles.sidebar} ${showSidebar && styles.showSidebar}`}>
      <div className={styles.navItemContainer}>
        {" "}
        <img src={home} alt="#" className={styles.icon} />
        <Link to="/" className={styles.navItem}>
          Home
        </Link>
      </div>
      {navItems.map((el, i) => (
        <div className={styles.navItemContainer} key={i}>
          {" "}
          <img src={el.icon} alt={el.name} className={styles.icon} />
          <a href={el.to} className={styles.navItem}>
            {el.navItem}
          </a>
        </div>
      ))}
      <button className={styles.button}>New Post</button>
    </div>
  );
};

export default Sidebar;
