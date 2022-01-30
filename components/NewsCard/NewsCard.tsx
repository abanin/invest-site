import React from "react";
import Card from "invest-kit/hydrogen/Card";
import Image from "next/image";

import Link from "../Link";
import BuffetPng from "./buffet.png";

import styles from "./styles.module.scss";

const NewsCard = () => {
  return (
    <Card className={styles.card}>
      <Image width="100%" height={180} src={BuffetPng.src} alt="buffet" />
      <div className={styles.content}>
        <span className={styles.date}>17:20, Сегодня</span>
        <h4 className={styles.title}>
          «Я был идиотом». Баффет не купил вовремя эти 6 акций и жалеет до сих пор
        </h4>
        <p className={styles.desc}>
          Уоррен Баффет — признанный гуру инвестиций. Однако и ему случалось совершать ошибки и
          жалеть об упущенных инвестиционных возможностях
        </p>
        <Link href="#" className={styles.link}>
          Читать
        </Link>
      </div>
    </Card>
  );
};

export default NewsCard;
