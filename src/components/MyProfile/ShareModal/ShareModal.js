import React from "react";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";
import { facebook, instagram, twitter, email } from "../../../images/image";
import styles from "./styles.module.css";

const ShareModal = ({ setModal }) => {
  const soicals = [
    { icon: facebook, name: "Facebook", to: "https://www.facebook.com/" },
    { icon: instagram, name: "Instagram", to: "https://www.instagram.com/" },
    { icon: twitter, name: "Twitter", to: "https://twitter.com/" },
    { icon: email, name: "Email", to: "mailto: abc@example.com" },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Share to</p>
        <AiOutlineClose
          className={styles.close}
          onClick={() => setModal(false)}
        />
      </div>

      <div className={styles.socialContainer}>
        {soicals.map((el, i) => (
          <a
            href={el.to}
            target="_blank"
            rel="noreferrer"
            key={i}
            className={styles.socials}
          >
            <p className={styles.nameAndIcon}>
              <img src={el.icon} alt="#" />
              <span className={styles.name}>{el.name}</span>
            </p>
            <AiOutlineArrowRight className={styles.arrow} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ShareModal;
