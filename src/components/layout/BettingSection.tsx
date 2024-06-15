import React, { useState } from "react";
import BetCard from "../BetCard";
import PlayButton from "../PlayButton";
import { useTranslation } from "react-i18next";
import { BET_CHOICES } from "../../constants";

type Props = {};

const BettingSection = (props: Props) => {
  const { t } = useTranslation();

  return (
    <div className="flex-grow flex flex-col items-center justify-center bg-gray-700">
      <div className="grid grid-cols-3 gap-3 mb-4">
        {BET_CHOICES.map((choice) => (
          <BetCard
            id={choice.id}
            title={choice.title()}
            fillColor={choice.fillColor}
            borderColor={choice.borderColor}
            textColor={choice.textColor}
          />
        ))}
      </div>
      <PlayButton />
    </div>
  );
};

export default BettingSection;
