import { BiSearch } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import ChatRoomSidebar from "./ChatRoomSidebar/ChatRoomSidebar";
import styles from "./Message.module.css";
import imageInput from "../../images/image-add.png";
import micImage from "../../images/mic.png";
import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";

const Message = () => {
  const { id } = useParams();
  const [roomToggle, setRoomToggle] = useState(false);
  const [inputMsg, setInputMsg] = useState("");
  return (
    <div className={`${styles.messageWrap} wrapper`}>
      {roomToggle && (
        <div
          className={styles.overlay}
          onClick={() => setRoomToggle(false)}
        ></div>
      )}
      <div className={`${styles.shadow1} shadow`}></div>
      <div className={`${styles.shadow2} shadow`}></div>
      <div className={styles.messageCont}>
        <div
          onClick={() => setRoomToggle((prev) => !prev)}
          className={styles.mobToggle}
        >
          <RxHamburgerMenu />
        </div>
        <div
          style={{ left: roomToggle ? "0px" : "-600px" }}
          className={styles.messageRooms}
        >
          <div className={styles.roomHeader}>
            <h2>Messages</h2>
            <button className={styles.newChatBtn}>Start New Chat</button>
          </div>
          <div className={styles.paddingDiv}>
            <div className={styles.roomSearch}>
              <BiSearch />
              <input type="text" placeholder="Search direct message" />
            </div>
            <ChatRoomSidebar
              setRoomToggle={setRoomToggle}
              username="Username"
              latestMsg="Sure! Let me see if there is any other sp"
              time="2m"
              unread={2}
              typing
            />
            <ChatRoomSidebar
              setRoomToggle={setRoomToggle}
              username="Username"
              latestMsg="Sure! Let me see if there is any other sp"
              time="2m"
            />
            <ChatRoomSidebar
              setRoomToggle={setRoomToggle}
              username="Username"
              latestMsg="Sure! Let me see if there is any other sp"
              time="2m"
            />
            <ChatRoomSidebar
              setRoomToggle={setRoomToggle}
              username="Username"
              latestMsg="Sure! Let me see if there is any other sp"
              time="2m"
              unread={2}
            />
          </div>
        </div>
        <div className={styles.roomChat}>
          <div className={styles.chatPart}>{id && <Outlet />}</div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (id === "") return;
              setInputMsg("");
            }}
            className={styles.inputDiv}
          >
            <input
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              type="text"
              placeholder="Write message..."
            />
            <div className={styles.rightInput}>
              <img src={imageInput} alt="" />
              <img src={micImage} alt="" />
            </div>
            <button type="submit"></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Message;
