import { SetState } from "@localTypes/SetState";
import { FC } from "react";
import Image from "next/image";

interface Props {
  setMenuOpen: SetState<boolean>;
}

const BurgerMenu: FC<Props> = ({ setMenuOpen }) => {
  return (
    <button
      onClick={() => {
        setMenuOpen((open) => !open);
      }}
      type="button"
      aria-label="Toggle Menu"
    >
      <Image priority width={24} height={18} src="/icons/burger.svg" alt="" />
    </button>
  );
};

export default BurgerMenu;
