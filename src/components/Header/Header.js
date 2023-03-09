import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { logo, messenger, notification, user } from "../../images/image";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <section className={`${styles.header} container`}>
        <img src={logo} alt="#" className={styles.logo} />
        <div className={styles.searchContainer}>
          <div className={styles.inputContainer}>
            <FiSearch className={styles.search} />
            <input
              type="text"
              placeholder="Search items, collections, and accounts"
              className={styles.input}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.userProfile}>
          <img src={notification} alt="" className={styles.icon} />
          <Link to={"/messages"} className={styles.icon}>
            <img src={messenger} alt="" />
          </Link>
          <div className={styles.userContainer}>
            <div className={styles.userContainer}>
              <img src={user} alt="#" className={styles.userImage} />
              <BsChevronDown className={styles.arrow} />
              <div className={styles.dropdowns}>
                <p className={styles.text}>Log out</p>
              </div>
            </div>
          </div>
          {showSidebar ? (
            <RiCloseLine
              color="#fafafa"
              className={styles.close}
              onClick={() => setShowSidebar((prev) => !prev)}
            />
          ) : (
            <RxHamburgerMenu
              className={styles.hamburger}
              onClick={() => setShowSidebar((prev) => !prev)}
            />
          )}
        </div>
      </section>
      <Sidebar showSidebar={showSidebar} />
    </>
  );
};

export default Header;
