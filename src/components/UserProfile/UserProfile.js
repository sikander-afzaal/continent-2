import React, { useState } from "react";
import { copy, friends, collection, user } from "../../images/image";
import Banner from "../Banner/Banner";
import ForSale from "./Posts/ForSale/ForSale";
import NftPosts from "./Posts/NftPosts";
import styles from "./styles.module.css";

const UserProfile = () => {
  const [nftPosts, setNftPosts] = useState(true);
  const [friend, setFriend] = useState(false);
  return (
    <>
      <Banner />
      <div className={`${styles.pageContainer} wrapper`}>
        <div className={styles.profileHeader}>
          <div className={styles.userInfo}>
            <img src={user} alt="#" className={styles.user} />
            <p className={styles.name}>juanbautista.eth</p>
            <div className={styles.addressContainer}>
              <span className={`${styles.text} ${styles.address}`}>
                0xe0c6...1db9
              </span>
              <img src={copy} alt="#" className={styles.copyIcon} />
            </div>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation{" "}
            </p>
            <a
              href="www.continent.io"
              target="_blank"
              className={`${styles.url} ${styles.text}`}
            >
              www.continent.io
            </a>
          </div>
          <div className={styles.actionContainer}>
            {" "}
            {friend ? (
              <button
                className={`${styles.button} ${styles.activeButton}`}
                onClick={() => setFriend((prev) => !prev)}
              >
                Unfriend
              </button>
            ) : (
              <button
                className={`${styles.button} ${styles.activeButton}`}
                onClick={() => setFriend((prev) => !prev)}
              >
                Add friend
              </button>
            )}{" "}
            <button className={`${styles.button} `}>Message</button>
            <div className={styles.infoContainer}>
              <div className={styles.info}>
                <img src={friends} alt="#" className={styles.mutualImage} />
                <p className={styles.infoText}>61 mutual friends</p>
              </div>
              <div className={styles.info}>
                <img src={collection} alt="#" className={styles.mutualImage} />
                <p className={styles.infoText}>4 mutual collections</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.postCategoryContainer}>
          <div className={styles.postCategory}>
            <div
              className={`${styles.post} ${nftPosts && styles.activePost}`}
              onClick={() => setNftPosts(true)}
            >
              <span className={styles.text}>NFTs post</span>
            </div>{" "}
            <div
              className={`${styles.post} ${!nftPosts && styles.activePost}`}
              onClick={() => setNftPosts(false)}
            >
              <span className={styles.text}>For sale</span>
            </div>
          </div>
          {!nftPosts && (
            <button className={styles.button}>Visit marketplace</button>
          )}
        </div>{" "}
        {nftPosts ? <NftPosts /> : <ForSale />}
      </div>
    </>
  );
};

export default UserProfile;
