import styles from "./ChatRoomSidebar.module.css";
import userImg from "../../../images/user.png";
import { NavLink } from "react-router-dom";
const ChatRoomSidebar = ({
  typing,
  latestMsg = "",
  unread,
  username,
  img = userImg,
  time,
  setRoomToggle,
  id,
}) => {
  return (
    <NavLink
      style={({ isActive, isPending }) => {
        return {
          backgroundColor: isActive ? "#D9D9D933" : "",
        };
      }}
      onClick={() => setRoomToggle(false)}
      to={`/messages/${id}`}
      className={styles.chatRoom}
    >
      <img src={img} alt="" />
      <div className={styles.rightRoom}>
        <div className={styles.roomDetails}>
          <h4>{username}</h4>
          {typing ? (
            <p>
              <span>Typing...</span>
            </p>
          ) : (
            <p
              style={{
                color: unread > 0 ? "#FAFAFA" : "#FAFAFAB8",
                fontWeight: unread > 0 ? "500" : "400",
              }}
            >
              {latestMsg.slice(0, 30)}... <span>{time}</span>
            </p>
          )}
        </div>
        {unread > 0 && <h5 className={styles.unread}>{unread}</h5>}
      </div>
    </NavLink>
  );
};

export default ChatRoomSidebar;
