import { useState } from "react";
import styles from "./NewMsgModal.module.css";
import userImg from "../../../images/user.png";

const NewMsgModal = ({ setOpenNewMsgModal }) => {
  const [dummyPeople, setDummyPeople] = useState([
    {
      name: "username",
      img: userImg,
      selected: false,
    },
    {
      name: "username",
      img: userImg,
      selected: false,
    },
    {
      name: "username",
      img: userImg,
      selected: false,
    },
    {
      name: "username",
      img: userImg,
      selected: false,
    },
    {
      name: "username",
      img: userImg,
      selected: false,
    },
    {
      name: "username",
      img: userImg,
      selected: false,
    },
    {
      name: "username",
      img: userImg,
      selected: false,
    },
    {
      name: "username",
      img: userImg,
      selected: false,
    },
  ]);
  const [searchedPerson, setSearchedPerson] = useState("");
  return (
    <>
      <div
        onClick={() => setOpenNewMsgModal(false)}
        className={styles.overlay}
      ></div>
      <div className={styles.modalWrapp}>
        <div className={styles.modalHeader}>
          <h3>New Message</h3>
          <svg
            onClick={() => setOpenNewMsgModal(false)}
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
        <div className={styles.addGrid}>
          <p>To:</p>
          <div className={styles.addedPeople}>
            <TaggedPerson />
            <input
              value={searchedPerson}
              onChange={(e) => setSearchedPerson(e.target.value)}
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className={styles.suggestionDiv}>
          <h3>Suggestions</h3>
          {dummyPeople.map((elem, idx) => {
            return (
              <div
                key={idx + new Date() + "suggest"}
                className={styles.suggestedPerson}
              >
                <div className={styles.leftSuggest}>
                  <img src={elem.img} alt="" />
                  <p>{elem.name}</p>
                </div>
                <button
                  onClick={() => {
                    setDummyPeople((prev) => {
                      const copy = [...prev];
                      copy[idx].selected = !prev[idx].selected;

                      return copy;
                    });
                  }}
                  className={styles.checkBox}
                >
                  {elem.selected && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  )}
                </button>
              </div>
            );
          })}
        </div>
        <button className={styles.button}>Next</button>
      </div>
    </>
  );
};

export default NewMsgModal;

const TaggedPerson = () => {
  return (
    <div className={styles.taggedPerson}>
      <p>username2</p>{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};
