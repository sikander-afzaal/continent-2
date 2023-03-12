import { BiSearch } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import ChatRoomSidebar from "./ChatRoomSidebar/ChatRoomSidebar";
import styles from "./Message.module.css";
import imageInput from "../../images/image-add.png";
import micImage from "../../images/mic.png";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ChatRoom from "./ChatRoom/ChatRoom";
import NewMsgModal from "./NewMsgModal/NewMsgModal";
import testImg from "../../images/nftposts/nft1.png";
import { useAudioRecorder } from "react-audio-voice-recorder";

const Message = () => {
  const { startRecording, stopRecording, recordingBlob, isRecording } =
    useAudioRecorder();
  const { id } = useParams();
  const [openNewMsgModal, setOpenNewMsgModal] = useState(false);
  const [roomToggle, setRoomToggle] = useState(false);
  const [showInput, setShowInput] = useState(true);
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
        { msg: "", time: "13:45", img: testImg },
      ],
    },
  ]);
  const recordingRef = useRef();

  useEffect(() => {
    if (recordingBlob) recordingRef.current = recordingBlob;
  }, [recordingBlob]);

  const addNewVoiceNote = () => {
    stopRecording();
    setTimeout(() => {
      const recordingBlob = recordingRef.current;
      if (!recordingBlob) return;
      const audioURL = URL.createObjectURL(recordingBlob);
      const copy = [...dummyMsgs];
      let yourMsg = true;
      copy.forEach((elem, idx) => {
        if (idx === copy.length - 1) {
          if (elem.yourMsg) {
            elem.msgs.push({ msg: "", time: "13:45", audio: audioURL });
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
          {
            yourMsg: true,
            msgs: [{ msg: "", time: "13:45", audio: audioURL }],
          },
        ]);
      }
    }, 100);
  };

  const addImageToChat = (e) => {
    const imgUrl = URL.createObjectURL(e.target.files[0]);
    if (!e.target.files[0].type.includes("image")) return;
    const copy = [...dummyMsgs];
    let yourMsg = true;
    copy.forEach((elem, idx) => {
      if (idx === copy.length - 1) {
        if (elem.yourMsg) {
          elem.msgs.push({ msg: "", time: "13:45", img: imgUrl });
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
        { yourMsg: true, msgs: [{ msg: "", time: "13:45", img: imgUrl }] },
      ]);
    }
  };

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
  // scrolling to the bottom of the messages everytime a new message is typed
  useEffect(() => {
    const chatRoom = document.querySelector(".chatMsgs");
    if (chatRoom) {
      chatRoom.scrollTop = chatRoom.scrollHeight;
    }
  }, [dummyMsgs, id]);

  return (
    <>
      {openNewMsgModal && (
        <NewMsgModal setOpenNewMsgModal={setOpenNewMsgModal} />
      )}
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
            className={`${styles.messageRooms} `}
          >
            <div className={styles.roomHeader}>
              <h2>Messages</h2>
              <button
                onClick={() => {
                  setOpenNewMsgModal(true);
                  setRoomToggle(false);
                }}
                className={styles.newChatBtn}
              >
                Start New Chat
              </button>
            </div>
            <div className={`${styles.paddingDiv}`}>
              <div className={styles.roomSearch}>
                <BiSearch />
                <input type="text" placeholder="Search direct message" />
              </div>
              <div className={`grScrollbar ${styles.scrollDiv}`}>
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
                  group
                />
                <ChatRoomSidebar
                  id={4}
                  setRoomToggle={setRoomToggle}
                  username="Username"
                  latestMsg="Sure! Let me see if there is any other sp"
                  time="2m"
                  unread={2}
                  group
                />
                <ChatRoomSidebar
                  id={5}
                  setRoomToggle={setRoomToggle}
                  username="Username"
                  latestMsg="Sure! Let me see if there is any other sp"
                  time="2m"
                  unread={2}
                  typing
                />
                <ChatRoomSidebar
                  id={6}
                  setRoomToggle={setRoomToggle}
                  username="Username"
                  latestMsg="Sure! Let me see if there is any other sp"
                  time="2m"
                />
                <ChatRoomSidebar
                  id={7}
                  setRoomToggle={setRoomToggle}
                  username="Username"
                  latestMsg="Sure! Let me see if there is any other sp"
                  time="2m"
                />
                <ChatRoomSidebar
                  id={8}
                  setRoomToggle={setRoomToggle}
                  username="Username"
                  latestMsg="Sure! Let me see if there is any other sp"
                  time="2m"
                  unread={2}
                />
                <ChatRoomSidebar
                  id={9}
                  setRoomToggle={setRoomToggle}
                  username="Username"
                  latestMsg="Sure! Let me see if there is any other sp"
                  time="2m"
                  unread={2}
                  typing
                />
                <ChatRoomSidebar
                  id={10}
                  setRoomToggle={setRoomToggle}
                  username="Username"
                  latestMsg="Sure! Let me see if there is any other sp"
                  time="2m"
                />
                <ChatRoomSidebar
                  id={11}
                  setRoomToggle={setRoomToggle}
                  username="Username"
                  latestMsg="Sure! Let me see if there is any other sp"
                  time="2m"
                />
                <ChatRoomSidebar
                  id={12}
                  setRoomToggle={setRoomToggle}
                  username="Username"
                  latestMsg="Sure! Let me see if there is any other sp"
                  time="2m"
                  unread={2}
                />
              </div>
            </div>
          </div>
          <div className={styles.roomChat}>
            <div
              style={{ height: showInput ? "calc(100% - 40px)" : "100%" }}
              className={styles.chatPart}
            >
              <ChatRoom
                setShowInput={setShowInput}
                DUMMY_MSGS={dummyMsgs}
                isRecording={isRecording}
              />
            </div>
            {showInput && (
              <form onSubmit={addMsg} className={styles.inputDiv}>
                <input
                  value={inputMsg}
                  onChange={(e) => setInputMsg(e.target.value)}
                  type="text"
                  placeholder="Write message..."
                />
                <div className={styles.rightInput}>
                  <div className={styles.imgInput}>
                    <input
                      onChange={addImageToChat}
                      style={{ display: "none" }}
                      type="file"
                      id="uploadImg"
                    />
                    <label htmlFor="uploadImg">
                      <img src={imageInput} alt="" />
                    </label>
                  </div>
                  {isRecording ? (
                    <p
                      style={{
                        color: "white",
                        fontSize: "16px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        addNewVoiceNote();
                        // stopRecording();
                      }}
                    >
                      Stop
                    </p>
                  ) : (
                    <img
                      onClick={() => {
                        startRecording();
                      }}
                      src={micImage}
                      alt=""
                    />
                  )}
                </div>
                <button type="submit"></button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
