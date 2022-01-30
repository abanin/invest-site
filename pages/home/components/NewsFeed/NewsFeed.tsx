import React from "react";
import Button from "invest-kit/hydrogen/Button";

import Container from "@/components/Container";
import H3 from "@/components/H3";
import NewsCard from "@/components/NewsCard";

import styles from "./styles.module.scss";

const NewsFeed = () => {
  return (
    <Container style={{ marginTop: 48 }}>
      <H3>Лента новостей</H3>
      <div className={styles.grid}>
        {Array.from({ length: 9 }).map((_, index) => {
          return <NewsCard key={index} />;
        })}
      </div>
      <Button style={{ margin: "24px auto 0 auto" }}>Читать ещё</Button>
    </Container>
  );
};

export default NewsFeed;
