import styles from "./GroupPhoto.module.css";
import testImg from "../../../images/nftposts/nft1.png";
import { useState } from "react";

const GroupPhoto = ({ setModal, setSelectedGroupPhoto }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(false);
  return (
    <>
      <div onClick={() => setModal(false)} className={styles.overlay}></div>
      <div className={styles.modalWrapp}>
        <div className={styles.modalHeader}>
          <h3>Select Group Picture</h3>
          <svg
            onClick={() => setModal(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className={`grScrollbar ${styles.photosDiv}`}>
          {Array(20)
            .fill(testImg)
            .map((elem, idx) => {
              return (
                <button
                  onClick={() => setSelectedPhoto({ img: elem, id: idx })}
                  key={idx + "photo"}
                >
                  <img
                    style={{
                      borderColor:
                        selectedPhoto.id === idx ? "#42CCD7" : "transparent",
                    }}
                    src={elem}
                    alt=""
                  />
                </button>
              );
            })}
        </div>
        <button
          style={{ opacity: selectedPhoto ? "1" : "0.5" }}
          className={styles.button}
          onClick={() => {
            setSelectedGroupPhoto(selectedPhoto);
            setModal(false);
          }}
        >
          Select
        </button>
      </div>
    </>
  );
};

export default GroupPhoto;
