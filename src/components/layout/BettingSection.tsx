import React, { useState } from "react";
import BetCard from "../BetCard";
import PlayButton from "../PlayButton";
import { useTranslation } from "react-i18next";
import { BET_CHOICES } from "../../constants";
import { useGameStore } from "../../store";

type Props = {};

const BettingSection = (props: Props) => {
  const { t } = useTranslation();
  const { bets, computerBet } = useGameStore();

  const playerBets = Object.keys(bets);

  return (
    <div className="flex-grow flex flex-col items-center justify-center bg-gray-700">
      <div className="text-yellow-600 font-bold uppercase mb-4">
        {computerBet && (
          <div>
            {computerBet} vs {playerBets.join(" & ")}
          </div>
        )}
      </div>
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
