import { FC, useState } from "react";
import Image from "next/image";
import styles from "@styles/Navbar/Index.module.scss";
import useMediaQuery from "@hooks/useMediaQuery";
import NavigationLinks from "./NavigationLinks";
import BurgerMenu from "./BurgerMenu";

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <nav aria-label="Navbar" className={styles.main}>
      <div className={styles.relativePositioning}>
        <Logo />
        {isMobile ? <BurgerMenu setMenuOpen={setMenuOpen} /> : null}
        {menuOpen || !isMobile ? <NavigationLinks isMobile={isMobile} /> : null}
      </div>
    </nav>
  );
};

const Logo: FC = () => (
  <Image
    priority
    src="/logo.svg"
    alt="Sunnyside agency logo"
    width={124}
    height={24}
  />
);
export default Navbar;
