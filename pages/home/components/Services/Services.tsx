import React from "react";

import Container from "@/components/Container";
import H2 from "@/components/H2";
import Section from "@/components/Section";

import styles from "./styles.module.scss";

const Services = () => {
  return (
    <Section style={{ backgroundColor: "#E6EFFD" }}>
      <Container>
        <H2>Наши сервисы</H2>
        <div className={styles.grid}>
          <div className={styles.card}>Калькуляторы инвестора</div>
          <div className={styles.card}>Калькуляторы инвестора</div>
          <div className={styles.card}>Калькуляторы инвестора</div>
        </div>
      </Container>
    </Section>
  );
};

export default Services;
