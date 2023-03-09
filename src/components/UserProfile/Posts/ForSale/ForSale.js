import React, { useState } from "react";
import { nft, eth } from "../../../../images/image";
import Modal from "./Modal/Modal";
import styles from "./styles.module.css";

const ForSale = () => {
  const [activeDetails, setActiveDetails] = useState(null);
  const posts = [
    {
      img: nft,
      name: "Moonbirds",
      id: 7789,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7790,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7791,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7792,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7793,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7794,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7795,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7796,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
  ];

  return (
    <>
      <div className={styles.posts}>
        {posts.map((el, i) => (
          <div className={styles.post} key={i}>
            <img src={el.img} alt="#" className={styles.image} />{" "}
            <div className={styles.detailsContainer}>
              <p className={styles.id}>
                {el.name} #{el.id}
              </p>
              <div
                className={styles.valueContainer}
                onClick={() => setActiveDetails(i + 1)}
              >
                <span className={styles.value}>{el.value}</span>
                <img src={eth} alt="#" className={styles.ethIcon} />
              </div>
              <p className={styles.lastSale}>Las sale: {el.lastSale} ETH</p>
            </div>
          </div>
        ))}
      </div>
      {activeDetails && (
        <Modal {...posts[activeDetails - 1]} setModal={setActiveDetails} />
      )}
    </>
  );
};

export default ForSale;
