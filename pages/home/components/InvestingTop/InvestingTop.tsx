import "swiper/css";
import "swiper/css/navigation";

import React from "react";
import Button from "invest-kit/hydrogen/Button";
import Card from "invest-kit/hydrogen/Card";
import Tabs from "invest-kit/hydrogen/Tabs";
import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Asset from "@/components/Asset";
import Container from "@/components/Container";
import H2 from "@/components/H2";
import Section from "@/components/Section";
import Graph from "./graph.svg";
import RatingSvg from "./rating.svg";

import styles from "./styles.module.scss";

const TABS = ["Для старта", "Инвестор", "Трейдер"];

const InvestingTop = () => {
  return (
    <Container>
      <Section>
        <H2>Топ инвест идей</H2>
        <Tabs
          className={styles.tabs}
          tabs={TABS}
          keyAccessor={(tab) => tab}
          valueFormatter={(tab) => tab}
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
                <Card
                  className={styles.card}
                  style={{
                    width: "100%",
                    height: 306,
                  }}
                >
                  <div className={styles.info}>
                    <Asset
                      src="https://invest-brands.cdn-tinkoff.ru/exchanges/MosExchange.png"
                      label="Газпром"
                      ticker="GZPM"
                    />

                    <div className={styles.rating}>
                      <span className={styles.star}>
                        <Image src={RatingSvg} alt="rating" />{" "}
                        <span style={{ marginLeft: 4 }}>5.0</span>
                      </span>
                      <span className={styles.price}>6,486 ₽</span>
                    </div>
                  </div>

                  <div className={styles.graph}>
                    <Image width={266} src={Graph} alt="graph" />
                  </div>
                  <div className={styles.bottom}>
                    <span className={styles.label}>Брокер: ВТБ</span>
                    <span className={styles.label}>Валюта: RUB</span>
                  </div>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Button className={styles.btn}>Открыть все идеи</Button>
      </Section>
    </Container>
  );
};

export default InvestingTop;
