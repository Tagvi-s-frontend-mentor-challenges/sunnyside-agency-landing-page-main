import useMediaQuery from "@hooks/useMediaQuery";
export default function useImageSize(mobile: number[], desktop: number[]) {
  const isMobile = useMediaQuery("(max-width: 750px)");
  return isMobile
    ? {
        width: mobile[0],
        height: mobile[1],
      }
    : {
        width: desktop[0],
        height: desktop[1],
      };
}
