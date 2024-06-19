import React from "react";
import { useGameStore } from "../../../store";
import { GAME_STATES } from "../../../constants";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import GameInProgress from "./GameInProgress";
import GameResult from "./GameResult";

type Props = {
  setShowGameResult: (arg: boolean) => void;
  showGameResult: boolean;
};

const GamePlaySection = ({ showGameResult, setShowGameResult }: Props) => {
  const gameState = useGameStore((state) => state.gameState);
  const bets = useGameStore((state) => state.bets);
  const { t } = useTranslation();

  const playerBets = Object.keys(bets);

  return (
    <div>
      {gameState === GAME_STATES.BeforeStart && (
        <div className="text-yellow-600 font-bold mb-4 text-center">
          {t("placeYourBets")}
        </div>
      )}
      <AnimatePresence onExitComplete={() => setShowGameResult(true)}>
        {gameState === GAME_STATES.InProgress && (
          <motion.div
            id="game-play-div"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <GameInProgress {...{ playerBets }} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {gameState === GAME_STATES.Completed && showGameResult && (
          <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <GameResult />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GamePlaySection;
