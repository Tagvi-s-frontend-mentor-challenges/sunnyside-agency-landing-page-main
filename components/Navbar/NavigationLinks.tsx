import { FC } from "react";
import styles from "@styles/Navbar/NavigationLinks.module.scss";

interface Props {
  isMobile: boolean;
}

const NavigationLinks: FC<Props> = ({ isMobile }) => {
  return (
    <nav className={styles.main} aria-label="Navigation">
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <button type="button">Contact</button>
          <style jsx>
            {`
              button {
                background-color: ${isMobile
                  ? "hsl(51, 100%, 49%)"
                  : "var(--white)"};
              }
            `}
          </style>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationLinks;
