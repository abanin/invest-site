import React from "react";
import cn from "classnames";
import Image, { ImageProps } from "next/image";

import logoSrc from "./Logo.svg";

import styles from "./styles.module.scss";

const Logo = ({ className, ...props }: Omit<ImageProps, "src" | "alt">) => {
  return (
    <div className={cn(className, styles.logo)}>
      <Image src={logoSrc} alt="Logotype" {...props} />
    </div>
  );
};

export default Logo;
