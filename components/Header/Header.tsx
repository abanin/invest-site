import React, { CSSProperties } from "react";
import cn from "classnames";
import Icon from "invest-kit/hydrogen/Icon";

import Link from "../Link";
import Logo from "../Logo";

import styles from "./styles.module.scss";

type Props = {
  className?: string;
  style?: CSSProperties;
};

const ITEMS = [
  {
    label: "Главная",
    href: "/",
  },
  {
    label: "Сервисы",
    href: "/services",
  },
  {
    label: "Аналитика",
    href: "/analytics",
  },
  {
    label: "Обучение",
    href: "edu",
  },
];

const Header = ({ className, style }: Props) => {
  const visibleItems = ITEMS.slice(0, 5);
  return (
    <nav style={style} className={cn(styles.nav, className)}>
      <Logo />
      <ul className={styles.list}>
        {visibleItems.map((item) => {
          return (
            <li key={item.href} className={styles.item}>
              <Link className={styles.navLink} href={item.href}>
                {item.label}
              </Link>
            </li>
          );
        })}
        <li className={styles.item}>
          <span className={styles.navLink}>
            Ещё <Icon className={styles.caret} iconName="expand-more" />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
