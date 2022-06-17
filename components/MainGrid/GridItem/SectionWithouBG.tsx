import { FC } from "react";
import styles from "@styles/MainGrid/GridItem/SectionWithoutBg.module.scss";

type Props = {
  header: string;
  text: string;
  linkColor: string;
};
const SectionWithoutBG: FC<Props> = ({ header, text, linkColor }) => (
  <section aria-label={header} className={styles.main}>
    <h1>{header}</h1>
    <p>{text}</p>
    <a className={styles.link} href="#">
      Learn more
    </a>
    <style jsx>
      {`
        a::before {
          background-color: ${linkColor};
        }
      `}
    </style>
  </section>
);
export default SectionWithoutBG;
