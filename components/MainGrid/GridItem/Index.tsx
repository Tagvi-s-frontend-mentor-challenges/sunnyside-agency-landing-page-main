import { FC } from "react";
import { Props } from "@localTypes/GridItem";
import SectionWithoutBG from "./SectionWithouBG";
import Picture from "./Picture";
import SectionWithBg from "./SectionWithBg";

const GridItem: FC<Props> = ({ header, src, text, linkColor, bg }) => {
  return (
    <>
      {header ? (
        bg ? (
          <SectionWithBg {...{ header, bg, text }} />
        ) : (
          <SectionWithoutBG {...{ header, text }} linkColor={linkColor!} />
        )
      ) : (
        <Picture src={src!} />
      )}
    </>
  );
};

export default GridItem;
