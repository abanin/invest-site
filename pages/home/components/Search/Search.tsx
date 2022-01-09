import React, { FC } from "react";
import cn from "classnames";
import Icon from "invest-kit/hydrogen/Icon";

import styles from "./styles.module.scss";

type Props = {
  className?: string;
};

const Search: FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.search, className)}>
      <Icon className={styles.icon} size={20} iconName="search" />
      <input placeholder="Hello world" className={styles.input} />
    </div>
  );
};

export default Search;
