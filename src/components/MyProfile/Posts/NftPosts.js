import React from "react";
import {
  nft1,
  nft2,
  nft3,
  nft4,
  nft5,
  nft6,
  nft7,
  nft8,
  nft9,
  nft10,
  nft11,
  nft12,
} from "../../../images/image";
import styles from "./styles.module.css";

const NftPosts = () => {
  const posts = [
    { img: nft1 },
    { img: nft2 },
    { img: nft3 },
    { img: nft4 },
    { img: nft5 },
    { img: nft6 },
    { img: nft7 },
    { img: nft8 },
    { img: nft9 },
    { img: nft10 },
    { img: nft11 },
    { img: nft12 },
  ];
  return (
    <div className={styles.posts}>
      {posts.map((el, i) => (
        <img src={el.img} alt="#" key={i} className={styles.image} />
      ))}
    </div>
  );
};

export default NftPosts;
