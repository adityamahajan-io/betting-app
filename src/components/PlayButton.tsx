import React from "react";
import { useTranslation } from "react-i18next";
import { useGameStore } from "../store";
import { GAME_STATES, INITIAL_BET_AMOUNT } from "../constants";

type Props = {
  setShowGameResult: (arg: boolean) => void;
};

const PlayButton = ({ setShowGameResult }: Props) => {
  const initializeGame = useGameStore((state) => state.initializeGame);
  const resetBets = useGameStore((state) => state.resetBets);
  const totalBetAmount = useGameStore((state) => state.totalBetAmount);
  const gameState = useGameStore((state) => state.gameState);

  const { t } = useTranslation();

  const handlePlayButtonClick = () => {
    if (gameState === GAME_STATES.BeforeStart) {
      initializeGame();
      return;
    }

    if (gameState === GAME_STATES.Completed) {
      resetBets();
      setShowGameResult(false);
      return;
    }
  };

  const isDisabled =
    gameState === GAME_STATES.InProgress ||
    totalBetAmount === INITIAL_BET_AMOUNT;

  return (
    <button
      disabled={isDisabled}
      className="border uppercase rounded-full cursor-pointer select-none bg-black text-yellow-600 border-yellow-600 font-bold text-xl px-12 py-4 disabled:opacity-30"
      onClick={handlePlayButtonClick}
    >
      {gameState === GAME_STATES.BeforeStart ||
      gameState === GAME_STATES.InProgress ? (
        <>{t("play")}</>
      ) : (
        <>{t("playAgain")}</>
      )}
    </button>
  );
};

export default PlayButton;
