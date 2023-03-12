import styles from "./ChatRoom.module.css";
import userImg from "../../../images/user.png";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import GroupPhoto from "../GroupPhoto/GroupPhoto";
import AddMemberModal from "../AddMemberModal/AddMemberModal";
import Waveform from "../../Waveform/Waveform";
import testImg from "../../../images/nftposts/nft1.png";

const ChatRoom = ({ isRecording, DUMMY_MSGS, setShowInput }) => {
  const DUMMY__MEMBERS = [
    {
      img: userImg,
      name: "Member1",
      mainAdmin: true,
    },
    {
      img: userImg,
      name: "Member1",
    },
    {
      img: userImg,
      name: "Member1",
    },
    {
      img: userImg,
      name: "Member1",
    },
    {
      img: userImg,
      name: "Member1",
    },
    {
      img: userImg,
      name: "Member1",
    },
    {
      img: userImg,
      name: "Member1",
    },
  ];
  const [groupSettingsToggle, setGroupSettingsToggle] = useState(false);
  const [groupPhotoModalToggle, setGroupPhotoModalToggle] = useState(false);
  const [selectedGroupPhoto, setSelectedGroupPhoto] = useState(false);
  const [toggleAddMemberModal, setToggleAddMemberModal] = useState(false);
  const [groupDesc, setGroupDesc] = useState(""); //the displayed desc
  const [toggleGroupDesc, setToggleGroupDesc] = useState(false); //toggles editable desc
  const [editableDesc, setEditableDesc] = useState(""); //desc in the textbox
  const [exitGroupModal, setExitGroupModal] = useState(false);
  const [deleteGroupModal, setDeleteGroupModal] = useState(false);
  const [removeMemberModal, setRemoveMemberModal] = useState(false);
  const [adminUser, setAdminUser] = useState();
  const { id } = useParams();
  useEffect(() => {
    if (id == 3 || id == 4) {
    } else {
      setGroupSettingsToggle(false);
    }
    if (id == 3) {
      setAdminUser(true);
      setGroupDesc("");
    } else {
      setAdminUser(false);
      setGroupDesc(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laudantium eaque error odio fugit. Iure qui distinctio molestias? Voluptates, ea!"
      );
      setSelectedGroupPhoto({ img: testImg });
    }
  }, [id]);
  // scrolling to the bottom of the messages everytime a new message is typed
  useEffect(() => {
    const setting = document.querySelector(".settings");
    if (groupSettingsToggle) {
      setting.scrollTo(0, 0);
    }
    setShowInput(!groupSettingsToggle);
  }, [groupSettingsToggle]);
  return (
    <>
      {exitGroupModal && <ExitGroup setModal={setExitGroupModal} />}
      {deleteGroupModal && <DeleteGroup setModal={setDeleteGroupModal} />}
      {removeMemberModal && <RemoveMember setModal={setRemoveMemberModal} />}
      {groupPhotoModalToggle && (
        <GroupPhoto
          setModal={setGroupPhotoModalToggle}
          setSelectedGroupPhoto={setSelectedGroupPhoto}
        />
      )}
      {toggleAddMemberModal && (
        <AddMemberModal setModal={setToggleAddMemberModal} />
      )}
      <div className={styles.chatRoom}>
        {/* //chat header --------------------- */}
        <div
          onClick={() => {
            if (id == 3 || id == 4) {
              setGroupSettingsToggle(true);
            }
          }}
          className={styles.chatHeader}
        >
          {selectedGroupPhoto?.img ? (
            <img src={selectedGroupPhoto.img} alt="" />
          ) : (
            <div className={styles.placeHolderImg}></div>
          )}
          <div className={styles.rightHeader}>
            <h3>{id == 3 || id == 4 ? "Group Name" : "juanbautista.eth"}</h3>
            <p>Active 28m ago</p>
          </div>
        </div>
        {/* //chat header end --------------------- */}
        {groupSettingsToggle ? (
          //settings part ---------------
          <div className={`${styles.settingDiv} grScrollbar settings`}>
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
              <p>{adminUser ? "GroupName" : "Group Name"}</p>
              <div className={styles.groupPhotoDiv}>
                {selectedGroupPhoto?.img ? (
                  <img
                    className={styles.groupPhoto}
                    src={selectedGroupPhoto.img}
                    alt="group"
                  />
                ) : (
                  <div className={styles.groupPhoto}></div>
                )}
                {adminUser ? (
                  <button onClick={() => setGroupPhotoModalToggle(true)}>
                    {selectedGroupPhoto?.img
                      ? "Change Group Photo"
                      : "Add Group Photo"}
                  </button>
                ) : (
                  ""
                )}
              </div>
              {groupDesc ? (
                <div className={styles.descDisplayed}>
                  {toggleGroupDesc ? (
                    <textarea
                      onChange={(e) => setEditableDesc(e.target.value)}
                      value={editableDesc}
                    ></textarea>
                  ) : (
                    <p>{groupDesc}</p>
                  )}
                  {adminUser ? (
                    <button
                      onClick={() => {
                        if (toggleGroupDesc) {
                          setToggleGroupDesc(false);
                          setGroupDesc(editableDesc);
                          setEditableDesc("");
                        } else {
                          setEditableDesc(groupDesc);
                          setToggleGroupDesc(true);
                        }
                      }}
                    >
                      {toggleGroupDesc ? "Update" : "Edit"} Group Description
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                <>
                  <button
                    className={styles.desc}
                    onClick={() => setToggleGroupDesc(true)}
                  >
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
                  {toggleGroupDesc && (
                    <div className={styles.changeDesc}>
                      <textarea
                        onChange={(e) => setEditableDesc(e.target.value)}
                        value={editableDesc}
                      ></textarea>
                      <button
                        onClick={() => {
                          setGroupDesc(editableDesc);
                          setToggleGroupDesc(false);
                          setEditableDesc("");
                        }}
                      >
                        Confirm
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
            <div className={styles.participantsDiv}>
              <div className={styles.partcipantsHead}>
                <p>Participants</p>
                {adminUser && (
                  <button onClick={() => setToggleAddMemberModal(true)}>
                    Add Member
                  </button>
                )}
              </div>
              {DUMMY__MEMBERS.map((elem, idx) => {
                return (
                  <Member
                    admin={adminUser}
                    removeMemberModal={setRemoveMemberModal}
                    {...elem}
                    key={idx + new Date() + "mem"}
                  />
                );
              })}
            </div>

            <div className={styles.deleteBtn}>
              {adminUser && (
                <button onClick={() => setDeleteGroupModal(true)}>
                  Delete Group
                </button>
              )}
            </div>
            <div className={styles.deleteBtn}>
              <button onClick={() => setExitGroupModal(true)}>
                Exit Group
              </button>
            </div>
          </div>
        ) : (
          //settings end --------------------
          <div className={`${styles.chatMsgs} chatMsgs grScrollbar`}>
            {id &&
              DUMMY_MSGS.map((elem, idx) => {
                return <ChatMsg key={idx + new Date()} {...elem} />;
              })}
          </div>
        )}
      </div>
    </>
  );
};

export default React.memo(ChatRoom, (prevProps, nextProps) => {
  return nextProps.isRecording;
});

const ChatMsg = ({ msgs, yourMsg }) => {
  return (
    <div className={`${yourMsg ? styles.sentMsg : styles.recievedMsg}`}>
      {msgs.map((elem, idx) => {
        if (elem.img) {
          return (
            <div className={styles.chatImgDiv} key={elem + idx + new Date()}>
              <img src={elem.img} className={styles.chatImg} alt="" />
              <span>{elem.time}</span>
            </div>
          );
        } else if (elem.msg) {
          return (
            <div key={elem + idx + new Date()} className={styles.chatMsgDiv}>
              <p>{elem.msg}</p>
              <span>{elem.time}</span>
            </div>
          );
        } else if (elem.audio) {
          return (
            <div key={elem + idx + new Date()} className={styles.chatMsgDiv}>
              <Waveform audio={elem.audio} />
              <span>{elem.time}</span>
            </div>
          );
        } else {
          return "";
        }
      })}
    </div>
  );
};

const Member = ({ img, name, admin, removeMemberModal, mainAdmin }) => {
  return (
    <div className={styles.partcipant}>
      <div>
        <img src={img} alt="" />
        <p>
          {name} {mainAdmin && "(admin)"}
        </p>
      </div>
      {admin && <button onClick={() => removeMemberModal(true)}>Remove</button>}
    </div>
  );
};

const ExitGroup = ({ setModal }) => {
  return (
    <>
      <div onClick={() => setModal(false)} className={styles.overlay}></div>
      <div className={styles.smallModal}>
        <p>
          Are you sure you want to leave <br /> GROUP_NAME?
        </p>
        <div className={styles.btnDiv}>
          <button className={styles.invertBtn} onClick={() => setModal(false)}>
            Yes
          </button>
          <button className={styles.button} onClick={() => setModal(false)}>
            No
          </button>
        </div>
      </div>
    </>
  );
};
const DeleteGroup = ({ setModal }) => {
  return (
    <>
      <div onClick={() => setModal(false)} className={styles.overlay}></div>
      <div className={styles.smallModal}>
        <p>
          Are you sure you want to delete <br /> GROUP_NAME?
        </p>
        <div className={styles.btnDiv}>
          <button className={styles.invertBtn} onClick={() => setModal(false)}>
            Yes
          </button>
          <button className={styles.button} onClick={() => setModal(false)}>
            No
          </button>
        </div>
      </div>
    </>
  );
};
const RemoveMember = ({ setModal }) => {
  return (
    <>
      <div onClick={() => setModal(false)} className={styles.overlay}></div>
      <div className={styles.smallModal}>
        <p>
          Are you sure you want to remove <br /> USER_NAME?
        </p>
        <div className={styles.btnDiv}>
          <button className={styles.invertBtn} onClick={() => setModal(false)}>
            Yes
          </button>
          <button className={styles.button} onClick={() => setModal(false)}>
            No
          </button>
        </div>
      </div>
    </>
  );
};
