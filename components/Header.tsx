import { FC } from "react";
import styles from "@styles/Header.module.scss";
import Image from "next/image";

const Header: FC = () => {
  return (
    <header className={styles.main}>
      <h1>We are creatives</h1>
      <Image
        priority
        src="/icons/arrow-down.svg"
        width={36}
        height={114}
        alt=""
      />
    </header>
  );
};

export default Header;
