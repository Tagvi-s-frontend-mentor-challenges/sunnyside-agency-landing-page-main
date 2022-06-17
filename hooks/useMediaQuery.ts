import useMediaQ from "@mui/material/useMediaQuery";
import mediaQuery from "css-mediaquery";
import { DeviceType } from "pages";
import { useContext } from "react";

export default function useMediaQuery(query: string) {
  const deviceType = useContext(DeviceType);
  const ssrMatchMedia = (query: string) => ({
    matches: mediaQuery.match(query, {
      width: deviceType === "mobile" ? "0px" : "1024px",
    }),
  });
  const matches = useMediaQ(query, {
    ssrMatchMedia,
  });
  return matches;
}
