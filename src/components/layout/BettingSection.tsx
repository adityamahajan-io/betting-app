import React, { useState } from "react";

import PlayButton from "../PlayButton";
import { GAME_STATES } from "../../constants";
import { useGameStore } from "../../store";
import BettingChoices from "./BettingChoices";
import GamePlaySection from "./GamePlaySection";

type Props = {};

const BettingSection = (props: Props) => {
  const [showGameResult, setShowGameResult] = useState(false);
  const { gameState } = useGameStore();

  return (
    <div className="flex-grow flex flex-col items-center justify-center">
      <div className="h-1/3 w-full flex flex-col justify-end pb-4">
        <GamePlaySection {...{ setShowGameResult, showGameResult }} />
      </div>
      <div className="h-1/3 w-full max-w-lg flex flex-col items-center justify-center">
        <BettingChoices disableClicks={gameState !== GAME_STATES.BeforeStart} />
      </div>
      <div className="h-1/3">
        <PlayButton {...{ setShowGameResult }} />
      </div>
    </div>
  );
};

export default BettingSection;
