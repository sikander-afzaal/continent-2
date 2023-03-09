import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { user, banner } from "../../images/image";
import Input from "../Input/Input";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

const EditProfile = () => {
  const [values, setValues] = useState({
    username: "juanbautista.eth",
    defaultAddress: "0x765dA497beAF1C7D83476C0e77B6CABA672dEfb9",
    bio: "",
    email: "jb@gmail.com",
    link: "yoursite.io",
  });
  const [imageSrc, setImageSrc] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImageSrc(event.target.result);
    };

    reader.readAsDataURL(file);
  };
  const address = [
    "0x765dA497beAF1C7D83476C0e77B6CABA672dEfb7",
    "0x765da497beaf1c7d83476c0e77b6caba672defb8",
    "0x765da497beaf1c7d83476c0e77b6caba672defb9",
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const tabs = [
    { navItem: "Edit profile", to: "/editProfile" },
    { navItem: "Notifications", to: "/notifications" },
    { navItem: "Edit profile", to: "/accountsupport" },
  ];
  return (
    <div className={`${styles.profileWrapper} r`}>
      {" "}
      <div className={styles.tabsContainer}>
        {tabs.map((el, i) => (
          <NavLink to={el.to} key={i} className={styles.text}>
            {el.navItem}
          </NavLink>
        ))}
      </div>
      <form className={`${styles.profile} `}>
        <div>
          <p className={styles.text}>Profile NFT</p>
          <img src={user} alt="#" className={styles.user} />
        </div>
        <div className={styles.bannerContainer}>
          <p className={styles.text}>Banner photo</p>
          <div className={styles.bannerImageContainer}>
            <input
              type="file"
              id="banner"
              className={styles.imageInput}
              onChange={handleFileUpload}
            />
            <label htmlFor="banner" className={styles.editWrapper}>
              <BiEditAlt className={styles.editIcon} />
            </label>
            <img
              src={imageSrc ? imageSrc : banner}
              alt="#"
              className={styles.banner}
            />
          </div>
        </div>

        <Input
          type="text"
          name="username"
          label="Username"
          value={values["username"]}
          onChange={onChange}
        />
        <div className={styles.defaultAddressContainer}>
          <label htmlFor="address" className={`${styles.label} ${styles.text}`}>
            Default Address{" "}
          </label>
          <div className={styles.inputContainer}>
            <input
              type="text"
              id="address"
              name="address"
              value={values["defaultAddress"]}
              className={`${styles.input} ${styles.text} ${styles.addressInput}`}
              onChange={onChange}
            />
            <BsChevronDown className={styles.arrow} />

            <div className={styles.addressContainer}>
              {address.map((el, i) => (
                <p
                  className={`${styles.text} ${styles.address}`}
                  key={i}
                  onClick={() =>
                    setValues({ ...values, defaultAddress: address[i] })
                  }
                >
                  {el}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Input
          type="email"
          name="email"
          label="Email address"
          value={values["email"]}
          onChange={onChange}
        />
        <div className={styles.textAreaContainer}>
          <label htmlFor="address" className={`${styles.label} ${styles.text}`}>
            Bio
          </label>
          <textarea
            className={`${styles.textArea}`}
            name="bio"
            id="bio"
            cols="30"
            rows="3"
            placeholder="Write your bio..."
          ></textarea>
        </div>
        <Input
          type="text"
          name="link"
          label="Link"
          value={values["link"]}
          onChange={onChange}
        />
        <button type="submit" className={styles.button}>
          Save changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
