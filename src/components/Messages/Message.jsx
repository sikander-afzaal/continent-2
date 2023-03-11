import { BiSearch } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import ChatRoomSidebar from "./ChatRoomSidebar/ChatRoomSidebar";
import styles from "./Message.module.css";
import imageInput from "../../images/image-add.png";
import micImage from "../../images/mic.png";
import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import ChatRoom from "./ChatRoom/ChatRoom";

const Message = () => {
  const { id } = useParams();
  const [roomToggle, setRoomToggle] = useState(false);
  const [inputMsg, setInputMsg] = useState("");
  const [dummyMsgs, setDummyMsgs] = useState([
    {
      yourMsg: true,
      msgs: [
        { msg: "Hello", time: "13:45" },
        { msg: "How are you", time: "13:45" },
      ],
    },
    {
      yourMsg: false,
      msgs: [
        { msg: "Hello", time: "13:45" },
        { msg: "How are you", time: "13:45" },
      ],
    },
    {
      yourMsg: true,
      msgs: [
        { msg: "Hello", time: "13:45" },
        { msg: "How are you", time: "13:45" },
      ],
    },
    {
      yourMsg: false,
      msgs: [
        { msg: "Hello", time: "13:45" },
        { msg: "How are you", time: "13:45" },
      ],
    },
    {
      yourMsg: true,
      msgs: [
        { msg: "Hello", time: "13:45" },
        { msg: "How are you", time: "13:45" },
      ],
    },
    {
      yourMsg: false,
      msgs: [
        { msg: "Hello", time: "13:45" },
        { msg: "How are you", time: "13:45" },
      ],
    },
    {
      yourMsg: true,
      msgs: [
        { msg: "Hello", time: "13:45" },
        { msg: "How are you", time: "13:45" },
      ],
    },
    {
      yourMsg: false,
      msgs: [
        { msg: "Hello", time: "13:45" },
        { msg: "How are you", time: "13:45" },
      ],
    },
    {
      yourMsg: true,
      msgs: [
        { msg: "Hello", time: "13:45" },
        { msg: "How are you", time: "13:45" },
      ],
    },
    {
      yourMsg: false,
      msgs: [
        { msg: "Hello", time: "13:45" },
        { msg: "How are you", time: "13:45" },
      ],
    },
  ]);
  const addMsg = (e) => {
    e.preventDefault();
    if (!inputMsg) return;
    const copy = [...dummyMsgs];
    let yourMsg = true;
    copy.forEach((elem, idx) => {
      if (idx === copy.length - 1) {
        if (elem.yourMsg) {
          elem.msgs.push({ msg: inputMsg, time: "13:45" });
        } else {
          yourMsg = false;
        }
      }
    });

    if (yourMsg) {
      setDummyMsgs(copy);
    } else {
      setDummyMsgs((prev) => [
        ...prev,
        { yourMsg: true, msgs: [{ msg: inputMsg, time: "13:45" }] },
      ]);
    }
    setInputMsg("");
  };
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
              id={1}
              setRoomToggle={setRoomToggle}
              username="Username"
              latestMsg="Sure! Let me see if there is any other sp"
              time="2m"
              unread={2}
              typing
            />
            <ChatRoomSidebar
              id={2}
              setRoomToggle={setRoomToggle}
              username="Username"
              latestMsg="Sure! Let me see if there is any other sp"
              time="2m"
            />
            <ChatRoomSidebar
              id={3}
              setRoomToggle={setRoomToggle}
              username="Username"
              latestMsg="Sure! Let me see if there is any other sp"
              time="2m"
            />
            <ChatRoomSidebar
              id={4}
              setRoomToggle={setRoomToggle}
              username="Username"
              latestMsg="Sure! Let me see if there is any other sp"
              time="2m"
              unread={2}
            />
            <ChatRoomSidebar
              id={1}
              setRoomToggle={setRoomToggle}
              username="Username"
              latestMsg="Sure! Let me see if there is any other sp"
              time="2m"
              unread={2}
              typing
            />
            <ChatRoomSidebar
              id={2}
              setRoomToggle={setRoomToggle}
              username="Username"
              latestMsg="Sure! Let me see if there is any other sp"
              time="2m"
            />
            <ChatRoomSidebar
              id={3}
              setRoomToggle={setRoomToggle}
              username="Username"
              latestMsg="Sure! Let me see if there is any other sp"
              time="2m"
            />
            <ChatRoomSidebar
              id={4}
              setRoomToggle={setRoomToggle}
              username="Username"
              latestMsg="Sure! Let me see if there is any other sp"
              time="2m"
              unread={2}
            />
            <ChatRoomSidebar
              id={1}
              setRoomToggle={setRoomToggle}
              username="Username"
              latestMsg="Sure! Let me see if there is any other sp"
              time="2m"
              unread={2}
              typing
            />
            <ChatRoomSidebar
              id={2}
              setRoomToggle={setRoomToggle}
              username="Username"
              latestMsg="Sure! Let me see if there is any other sp"
              time="2m"
            />
            <ChatRoomSidebar
              id={3}
              setRoomToggle={setRoomToggle}
              username="Username"
              latestMsg="Sure! Let me see if there is any other sp"
              time="2m"
            />
            <ChatRoomSidebar
              id={4}
              setRoomToggle={setRoomToggle}
              username="Username"
              latestMsg="Sure! Let me see if there is any other sp"
              time="2m"
              unread={2}
            />
          </div>
        </div>
        <div className={styles.roomChat}>
          <div className={styles.chatPart}>
            <ChatRoom DUMMY_MSGS={dummyMsgs} />
          </div>
          <form onSubmit={addMsg} className={styles.inputDiv}>
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
