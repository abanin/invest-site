import React from "react";
import Button from "invest-kit/hydrogen/Button";

import CardWithImageOnTop from "@/components/CardWithImageOnTop";
import Container from "@/components/Container";
import H3 from "@/components/H3";

import styles from "./styles.module.scss";

const NewsFeed = () => {
  return (
    <Container style={{ marginTop: 48 }}>
      <H3>Лента новостей</H3>
      <div className={styles.grid}>
        {Array.from({ length: 9 }).map((_, index) => {
          return (
            <CardWithImageOnTop style={{ height: 250, background: "lightskyblue" }} key={index}>
              Hello
            </CardWithImageOnTop>
          );
        })}
      </div>
      <Button style={{ margin: "24px auto 0 auto" }}>Читать ещё</Button>
    </Container>
  );
};

export default NewsFeed;
