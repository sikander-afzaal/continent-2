import React from "react";
import styles from "./styles.module.css";

const Modal = ({ children, setModal, background }) => {
  return (
    <>
      <div className={styles.modal}>{children}</div>
      <div
        className={styles.overlay}
        style={{ background: background }}
        onClick={() => setModal(false)}
      ></div>
    </>
  );
};

export default Modal;
