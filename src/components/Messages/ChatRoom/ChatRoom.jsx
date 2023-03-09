import styles from "./ChatRoom.module.css";
import userImg from "../../../images/user.png";
import { useParams } from "react-router-dom";

const ChatRoom = ({ DUMMY_MSGS }) => {
  const { id } = useParams();
  return (
    <div className={styles.chatRoom}>
      <div className={styles.chatHeader}>
        <img src={userImg} alt="" />
        <div className={styles.rightHeader}>
          <h3>juanbautista.eth</h3>
          <p>Active 28m ago</p>
        </div>
      </div>
      <div className={styles.chatMsgs}>
        {id &&
          DUMMY_MSGS.map((elem, idx) => {
            return <ChatMsg key={idx + new Date()} {...elem} />;
          })}
      </div>
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
