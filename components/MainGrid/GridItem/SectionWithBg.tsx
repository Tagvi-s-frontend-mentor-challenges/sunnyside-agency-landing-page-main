import { FC } from "react";
import Image from "next/image";
import styles from "@styles/MainGrid/GridItem/SectionWithBg.module.scss";
import useImageSize from "@hooks/useImageSize";
import useMediaQuery from "@hooks/useMediaQuery";
import { Props } from "@localTypes/GridItem";

const SectionWithBg: FC<Props> = ({ text, header, bg }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const sizes = useImageSize([750, 1200], [720, 600]);
  return (
    <section title={header} className={styles.section}>
      <Image
        src={`/${isMobile ? "mobile" : "desktop"}/image-${bg}.jpg`}
        alt=""
        objectFit="cover"
        {...(isMobile ? sizes : { layout: "fill" })}
      />
      <div>
        <style jsx>
          {`
            h1,
            p {
              color: ${bg!.startsWith("graphic")
                ? "var(--graphic-design-text)"
                : "var(--photography-text)"};
            }
          `}
        </style>
        <h1>{header}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default SectionWithBg;
