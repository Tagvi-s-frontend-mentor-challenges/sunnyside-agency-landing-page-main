import { FC } from "react";
import Image from "next/image";
import styles from "@styles/Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.main}>
      <Image priority src="/logo-footer.svg" alt="" width={124} height={24} />
      <nav aria-label="Footer Navigation">
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
        </ul>
      </nav>
      <nav aria-label="Social Media Links">
        <ul>
          {socialMeiaLinks.map((name) => {
            return (
              <li key={name}>
                <a aria-label={name} href="#">
                  <Image
                    priority
                    src={`/icons/${name}.svg`}
                    key={name}
                    alt=""
                    width={20}
                    height={20}
                    objectFit="contain"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
};

const socialMeiaLinks = ["facebook", "instagram", "twitter", "pinterest"];

export default Footer;
