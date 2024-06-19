import classNames from "classnames";
import React from "react";
import { useGameStore } from "../store";
import { BET_AMOUNT, GAME_STATES, MAX_BETTING_POSITIONS } from "../constants";
import { ChevronUp, ChevronDown } from "react-feather";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence, useAnimate } from "framer-motion";

type Props = {
  title: string;
  fillColor: string;
  borderColor: string;
  textColor: string;
  id: string;
  showToast: (arg: string) => void;
};

const BetCard = ({
  title,
  fillColor,
  borderColor,
  textColor,
  id,
  showToast,
}: Props) => {
  const gameState = useGameStore((state) => state.gameState);
  const gameResult = useGameStore((state) => state.gameResult);
  const placeBet = useGameStore((state) => state.placeBet);
  const reduceBet = useGameStore((state) => state.reduceBet);
  const bets = useGameStore((state) => state.bets);
  const balance = useGameStore((state) => state.balance);

  const { t } = useTranslation();

  const [betAmount, animate] = useAnimate();

  const handlePlaceBet = () => {
    const positionsPicked = Object.keys(bets);
    if (balance < BET_AMOUNT) {
      showToast(t("insufficientBalance"));
      return;
    }

    if (
      positionsPicked.length >= MAX_BETTING_POSITIONS &&
      !positionsPicked.includes(id)
    ) {
      showToast(t("bettingPositionsLimitCrossed"));
      return;
    }

    placeBet(id);

    if (bets[id]) {
      animate(
        betAmount.current,
        {
          y: [0, -5, 0],
        },
        { duration: 0.2, ease: "easeInOut" }
      );
    }
  };

  const handleReduceBet = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    reduceBet(id);

    animate(
      betAmount.current,
      {
        y: [0, 5, 0],
      },
      { duration: 0.2, ease: "easeInOut" }
    );
  };

  return (
    <>
      <motion.div
        className={classNames(
          "border w-28 h-28 md:w-40 md:h-40 flex flex-col items-center p-1 md:p-2 rounded-lg cursor-pointer hover:drop-shadow-betCardGlow",
          fillColor,
          borderColor,
          {
            "border-4 drop-shadow-betCardGlow":
              gameState === GAME_STATES.Completed &&
              gameResult.successBet === id,
          }
        )}
        onClick={handlePlaceBet}
      >
        <AnimatePresence>
          {bets[id] && (
            <motion.div
              key={id}
              className="my-auto"
              initial={{ y: 10, opacity: 0, scale: 0.7 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{
                y: 20,
                opacity: 0,
                scale: 0.7,
                transition: { duration: 0.1 },
              }}
            >
              <div
                ref={betAmount}
                className="flex justify-center items-center gap-x-1 md:gap-x-2"
              >
                {gameState === GAME_STATES.BeforeStart && (
                  <ChevronDown
                    onClick={handleReduceBet}
                    className={classNames(textColor, "hover:text-white")}
                    size={20}
                  />
                )}
                <div className="bg-white rounded-full border-blue-600 border-4 w-12 h-12 md:w-16 md:h-16 flex justify-center text-[9px] items-center font-bold md:text-sm">
                  {bets[id]}
                </div>
                {gameState === GAME_STATES.BeforeStart && (
                  <ChevronUp
                    className={classNames(textColor, "hover:text-white")}
                    size={20}
                  />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={classNames(
            "text-xs md:text-lg mt-auto font-bold",
            textColor
          )}
        >
          {title}
        </div>
      </motion.div>
    </>
  );
};

export default BetCard;
