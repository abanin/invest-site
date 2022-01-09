import React, { FC, ReactNode } from "react";
import cn from "classnames";
import Image from "next/image";

import styles from "./styles.module.scss";

type Props = {
  image?: ReactNode;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const CardWithImageOnTop: FC<Props> = ({ children, image, className, ...props }) => {
  return (
    <figure className={cn(styles.cardWithImageOnTop, className)} {...props}>
      <div className={styles.image}>
        {typeof image === "string" ? <Image src="image" alt="#" /> : image}
      </div>
      <figcaption className={styles.main}>{children}</figcaption>
    </figure>
  );
};

export default CardWithImageOnTop;
