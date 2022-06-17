import useImageSize from "@hooks/useImageSize";
import { FC } from "react";
import useMediaQuery from "@hooks/useMediaQuery";
import Image from "next/image";

const Picture: FC<{ src: string }> = ({ src }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const sizes = useImageSize([750, 624], [720, 600]);
  return (
    <Image
      style={{ lineHeight: 0 }}
      src={`${isMobile ? "/mobile/" : "/desktop/"}${src!}`}
      alt=""
      {...sizes}
      objectFit="cover"
    />
  );
};
export default Picture;
