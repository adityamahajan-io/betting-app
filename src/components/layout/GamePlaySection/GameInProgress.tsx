import React, { useEffect, useState } from "react";
import { useGameStore } from "../../../store";
import { BeatLoader } from "react-spinners";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type Props = {
  playerBets: string[];
};

const GamePlay = ({ playerBets }: Props) => {
  const [showComputerBet, setShowComputerBet] = useState(false);

  const { t } = useTranslation();

  const computerBet = useGameStore((state) => state.computerBet);

  useEffect(() => {
    setTimeout(() => setShowComputerBet(true), 600);
  }, []);

  return (
    <div className="grid grid-cols-12 text-white max-w-2xl mx-auto w-full px-4">
      <div className="flex flex-col items-start flex-grow col-span-5">
        <span className="text-xs text-yellow-600">{t("computer")}</span>
        <span className="text-sm md:text-3xl font-bold">
          {showComputerBet ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {computerBet}
            </motion.div>
          ) : (
            <BeatLoader color="#FFF" />
          )}
        </span>
      </div>
      <div className="text-3xl text-yellow-600 font-bold text-center flex-grow col-span-2">
        {t("vs")}
      </div>
      <div className="flex flex-col items-end flex-grow col-span-5">
        <span className="text-xs text-yellow-600">{t("you")}</span>
        <span className="text-sm md:text-3xl font-bold">
          {playerBets.join(" + ")}
        </span>
      </div>
    </div>
  );
};

export default GamePlay;
