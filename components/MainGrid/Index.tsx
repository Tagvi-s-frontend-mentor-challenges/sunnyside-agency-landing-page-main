import { FC } from "react";
import GridItem from "./GridItem/Index";
import styles from "@styles/MainGrid/Index.module.scss";
import { elements } from "./data";

const MainGrid: FC = () => {
  return (
    <div className={styles.main}>
      {elements.map((element) => {
        if (element.bg) {
          return <GridItem key={element.header} {...element} />;
        }
        if (element.header) {
          return (
            <div key={element.header} className={styles.div}>
              <GridItem {...element} />
            </div>
          );
        }
        return <GridItem key={element.src} {...element} />;
      })}
    </div>
  );
};

export default MainGrid;
