import { FC } from "react";
import Image from "next/image";
import styles from "@styles/Testimonials/Testimonial.module.scss";

interface Props {
  name: string;
  text: string;
  title: string;
}

const Testimonial: FC<Props> = ({ name, text, title }) => {
  return (
    <article className={styles.main}>
      <div className={styles.pic}>
        <Image
          src={`/pfp/${name.split(" ")[0].toLowerCase()}.jpg`}
          alt={`A picture of ${name}`}
          layout="fill"
        />
      </div>
      <blockquote>
        <p>{text}</p>
        <figcaption>
          {name} <br />
          <span>{title}</span>
        </figcaption>
      </blockquote>
    </article>
  );
};

export default Testimonial;
