import React from "react";
import CardWithImageOnTop from "invest-kit/hydrogen/CardWithImageOnTop";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Container from "@/components/Container";
import H3 from "@/components/H3";

import styles from "./styles.module.scss";

const SelectionNews = () => {
  return (
    <Container>
      <H3 style={{ marginTop: 48, marginBottom: 24 }}>Подборка статей для вас</H3>
      <Swiper
        modules={[Navigation]}
        className={styles.swiper}
        spaceBetween={20}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Array.from({ length: 10 }).map((_item, index) => {
          return (
            <SwiperSlide key={index}>
              <CardWithImageOnTop
                className={styles.selectionCard}
                style={{ width: "100%", height: 306 }}
              >
                Hello
              </CardWithImageOnTop>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default SelectionNews;
