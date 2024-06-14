import React from "react";
import BetCard from "../BetCard";
import PlayButton from "../PlayButton";
import { useTranslation } from "react-i18next";

type Props = {};

const BettingSection = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="flex-grow flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 gap-3 mb-4">
        <BetCard title={t("betType.rock")} />
        <BetCard title={t("betType.paper")} />
        <BetCard title={t("betType.scissor")} />
      </div>
      <PlayButton />
    </div>
  );
};

export default BettingSection;
