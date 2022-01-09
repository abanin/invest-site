import React from "react";
import Card from "invest-kit/hydrogen/Card";
import Icon from "invest-kit/hydrogen/Icon";
import Tabs from "invest-kit/hydrogen/Tabs";

import Container from "@/components/Container";
import H2 from "@/components/H2";
import Link from "@/components/Link";
import Section from "@/components/Section";

import styles from "./styles.module.scss";

const TABS = ["Все новости", "Россия", "Мир", "***"];

const MainNews = () => {
  return (
    <Container>
      <H2>Новости</H2>
      <Tabs
        className={styles.tabs}
        tabs={TABS}
        keyAccessor={(tab) => tab}
        valueFormatter={(tab) => tab}
      />
      <Card className={styles.mainNew}>
        <div className={styles.content}>
          <div className={styles.preview}>
            <div className={styles.info}>
              <Icon className={styles.alertIcon} iconName="alert-circle" />
              <span className={styles.infoTitle}>Тема дня,</span>
              <span className={styles.time}>17:20, Сегодня</span>
            </div>
            <div className={styles.title}>
              Что должен сделать каждый ивестор до начала 2022 года: 4 главных совета
            </div>
            <p className={styles.desc}>
              До Нового года осталось полтора месяца. Инвестору нужно успеть сделать несколько дел,
              которые повлияют на его доходы. Рассказываем, зачем открывать ИИС в конце года, как
              снизить налоги и какие ралли нас могут ждать
            </p>
            <Link className={styles.link} href="#">
              Читать
            </Link>
          </div>

          <div style={{ flexGrow: 1, width: "50%", backgroundColor: "red" }} />
          {/* <Image src="#" alt="preview" /> */}
        </div>
      </Card>
    </Container>
  );
};

export default MainNews;
