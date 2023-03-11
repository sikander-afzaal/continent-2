import styles from "./ChatRoom.module.css";
import userImg from "../../../images/user.png";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ChatRoom = ({ DUMMY_MSGS }) => {
  const DUMMY__MEMBERS = [
    {
      img: userImg,
      name: "Member1",
      admin: true,
    },
    {
      img: userImg,
      name: "Member1",
      admin: false,
    },
    {
      img: userImg,
      name: "Member1",
      admin: false,
    },
    {
      img: userImg,
      name: "Member1",
      admin: false,
    },
    {
      img: userImg,
      name: "Member1",
      admin: false,
    },
    {
      img: userImg,
      name: "Member1",
      admin: false,
    },
    {
      img: userImg,
      name: "Member1",
      admin: false,
    },
  ];
  const [groupSettingsToggle, setGroupSettingsToggle] = useState(false);
  const { id } = useParams();
  return (
    <div className={styles.chatRoom}>
      <div
        onClick={() => setGroupSettingsToggle(true)}
        className={styles.chatHeader}
      >
        <img src={userImg} alt="" />
        <div className={styles.rightHeader}>
          <h3>juanbautista.eth</h3>
          <p>Active 28m ago</p>
        </div>
      </div>
      {groupSettingsToggle ? (
        <div className={styles.settingDiv}>
          <div className={styles.backRow}>
            <svg
              onClick={() => setGroupSettingsToggle(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            <button>Save</button>
          </div>
          <div className={styles.centerDetails}>
            <p>Group Name</p>
            <div className={styles.groupPhotoDiv}>
              <div className={styles.groupPhoto}></div>
              <button>Add Group Photo</button>
            </div>
            <button className={styles.desc}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Group Description
            </button>
          </div>
          <div className={styles.participantsDiv}>
            <div className={styles.partcipantsHead}>
              <p>Participants</p>
              <button>Add Member</button>
            </div>
            {DUMMY__MEMBERS.map((elem, idx) => {
              return <Member {...elem} key={idx + new Date() + "mem"} />;
            })}
          </div>
          <div className={styles.deleteBtn}>
            <button>Delete Group</button>
          </div>
        </div>
      ) : (
        <div className={styles.chatMsgs}>
          {id &&
            DUMMY_MSGS.map((elem, idx) => {
              return <ChatMsg key={idx + new Date()} {...elem} />;
            })}
        </div>
      )}
    </div>
  );
};

export default ChatRoom;

const ChatMsg = ({ msgs, yourMsg }) => {
  return (
    <div className={`${yourMsg ? styles.sentMsg : styles.recievedMsg}`}>
      {msgs.map((elem, idx) => {
        return (
          <div key={elem + idx + new Date()}>
            <p>{elem.msg}</p>
            <span>{elem.time}</span>
          </div>
        );
        return;
      })}
    </div>
  );
};

const Member = ({ img, name, admin }) => {
  return (
    <div className={styles.partcipant}>
      <div>
        <img src={img} alt="" />
        <p>
          {name} {admin && "(admin)"}
        </p>
      </div>
      <button>Remove</button>
    </div>
  );
};
