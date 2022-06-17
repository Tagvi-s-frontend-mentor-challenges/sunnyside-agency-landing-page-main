import { FC } from "react";
import Image from "next/image";
import useImageSize from "@hooks/useImageSize";
import useMediaQuery from "@hooks/useMediaQuery";
import styles from "@styles/Gallery.module.scss";

const Gallery: FC = () => {
  const sizes = useImageSize([376, 376], [720, 894]);
  const isMobile = useMediaQuery("(max-width: 992px)");
  return (
    <section className={styles.main} aria-hidden="true">
      {imageNames.map((name) => {
        return (
          <Image
            key={name}
            alt=""
            src={`/${
              isMobile ? "mobile" : "desktop"
            }/image-gallery-${name}.jpg`}
            objectFit="cover"
            {...sizes}
          />
        );
      })}
    </section>
  );
};

export default Gallery;

const imageNames = ["milkbottles", "orange", "cone", "sugar-cubes"];
