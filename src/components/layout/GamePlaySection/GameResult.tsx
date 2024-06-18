import React from "react";
import {
  BET_CHOICES_STYLING,
  GAME_CHOICES,
  GAME_RESULTS,
  GAME_STATES,
} from "../../../constants";
import { useGameStore } from "../../../store";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

const GameResult = () => {
  const { gameResult, netGain, gameState } = useGameStore();
  const { t } = useTranslation();

  const renderOutcomeText = () => {
    if (
      gameResult.outcome === GAME_RESULTS.Win ||
      gameResult.outcome === GAME_RESULTS.Loss
    ) {
      return (
        <>
          {gameResult.successBet} {t("won")}
        </>
      );
    } else if (gameResult.outcome === GAME_RESULTS.Draw) {
      return (
        <>
          {t("drawWith")} {gameResult.successBet}
        </>
      );
    }
  };

  const renderGameOutcome = () => {
    if (gameState === GAME_STATES.Completed && gameResult.successBet) {
      const styling =
        BET_CHOICES_STYLING[gameResult.successBet as GAME_CHOICES];

      return (
        <div className="text-center">
          <div className={classNames("text-3xl font-bold", styling.textColor)}>
            {renderOutcomeText()}
          </div>
          <div>
            <span className="font-bold text-lg text-yellow-600">You win: </span>
            <span className="text-white text-lg font-bold">{netGain}</span>
          </div>
        </div>
      );
    }
  };
  return <div>{renderGameOutcome()}</div>;
};

export default GameResult;
