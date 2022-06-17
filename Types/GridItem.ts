import { ImageProps } from "next/image";

type TextGridItem = {
  header: string;
  text: string;
  linkColor?: string;
  bg?: string;
  src?: never;
};
type PictureGridItem = ImageProps & {
  src: string;
  header?: never;
  text?: never;
  linkColor?: never;
  bg?: never;
};

export type Props = PictureGridItem | TextGridItem;
