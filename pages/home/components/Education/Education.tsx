import React from "react";

import Container from "@/components/Container";
import H2 from "@/components/H2";
import Section from "@/components/Section";

import styles from "./styles.module.scss";

const Education = () => {
  return (
    <Section style={{ backgroundColor: "#E6EFFD" }}>
      <Container>
        <H2>Обучение</H2>
        <div className={styles.grid}>
          <div className={styles.card}>Калькуляторы инвестора</div>
          <div className={styles.card}>Калькуляторы инвестора</div>
          <div className={styles.card}>Калькуляторы инвестора</div>
        </div>
      </Container>
    </Section>
  );
};

export default Education;
