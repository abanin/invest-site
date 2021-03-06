import React from "react";
import Card from "invest-kit/hydrogen/Card";
import Icon from "invest-kit/hydrogen/Icon";
import Tabs from "invest-kit/hydrogen/Tabs";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Asset from "@/components/Asset";
import Container from "@/components/Container";
import H2 from "@/components/H2";
import Section from "@/components/Section";

import styles from "./styles.module.scss";

const TABS = [
  {
    label: "Фонды",
    value: "fonds",
  },
  { label: "Акции", value: "shares" },
  { label: "Облигации", value: "bonds" },
  { label: <Icon iconName="check" />, value: "more" },
];

const BuySomethingElse = () => {
  return (
    <Section>
      <Container>
        <H2>Что ещё купить?</H2>
        <Tabs
          className={styles.tabs}
          tabs={TABS}
          keyAccessor={(tab) => tab.value}
          valueFormatter={(tab) => tab.label}
        />
        <Swiper
          modules={[Navigation]}
          className={styles.swiper}
          spaceBetween={20}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {Array.from({ length: 10 }).map((_item, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className={styles.card} style={{ width: "100%", height: 200 }}>
                  <div className={styles.info}>
                    <Asset
                      src="https://invest-brands.cdn-tinkoff.ru/exchanges/MosExchange.png"
                      label="FXRD"
                      ticker="₽,$"
                    />
                    <div className={styles.price}>
                      <span>25,87 %</span>
                      <span>61,54 ₽</span>
                    </div>
                  </div>

                  <div className={styles.title}>Фонд акций крупнейших компаний США</div>
                  <div className={styles.bottom}>
                    <span className={styles.vtb}>ВТБ-Ликвидность</span>
                    <span className={styles.perc}>32%</span>
                  </div>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Section>
  );
};

export default BuySomethingElse;
