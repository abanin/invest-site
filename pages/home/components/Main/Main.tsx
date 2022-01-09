import React from "react";
import Image from "next/image";

import Container from "@/components/Container";
import mainSrc from "./main-image.png";

import styles from "./styles.module.scss";

const Main = () => {
  return (
    <main className={styles.main}>
      <Container style={{ position: "relative" }}>
        <h1 className={styles.title}>Портал-агрегатор для инвесторов</h1>
        <p className={styles.desc}>
          Выбирайте инвест идеи, делитесь опытом и считайте свои доходы на одной площадке
        </p>
      </Container>
      <div className={styles.image}>
        <Image width={277} height={277} src={mainSrc} alt="mainPage" />
      </div>
    </main>
  );
};

export default Main;
