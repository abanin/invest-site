import React, { FC } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";

const Section: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section className={cn(styles.section, className)} {...props}>
      {children}
    </section>
  );
};

export default Section;
