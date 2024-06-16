import React from "react";
import { useTranslation } from "react-i18next";
import { useGameStore } from "../store";

type Props = {};

const PlayButton = (props: Props) => {
  const { t } = useTranslation();
  const { initializeGame, playGame } = useGameStore();

  const handlePlayButtonClick = () => {
    initializeGame();

    setTimeout(playGame, 1000);
  };

  return (
    <div
      className="border rounded-full px-4 py-1 cursor-pointer select-none"
      onClick={handlePlayButtonClick}
    >
      {t("play")}
    </div>
  );
};

export default PlayButton;
