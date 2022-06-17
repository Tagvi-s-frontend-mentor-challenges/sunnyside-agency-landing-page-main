import { FC } from "react";
import Testimonial from "@components/Testimonial";
import styles from "@styles/Testimonials/Index.module.scss";

const Testimonials: FC = () => {
  return (
    <section aria-labelledby="testimonials" className={styles.main}>
      <h1 id="testimonials">Client testimonials</h1>
      <div className={styles.flex}>
        {data.map((t) => {
          return <Testimonial key={`${t.name}`} {...t} />;
        })}
      </div>
    </section>
  );
};

export default Testimonials;

const data = [
  {
    name: "Emily R.",
    title: "Marketing Director",
    text: `We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.`,
  },
  {
    name: "Thomas S.",
    title: "Chief Operating Officer",
    text: `Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable
  experience.`,
  },
  {
    name: "Jennie F.",
    title: "Business Owner",
    text: `Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!`,
  },
];
