import React from "react";
import { useGameStore } from "../store/index";

type Props = {};

const Header = (props: Props) => {
  const { balance } = useGameStore();
  return <div className="bg-slate-500">{balance}</div>;
};

export default Header;
