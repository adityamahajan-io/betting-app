import React from "react";
import { useGameStore } from "../store/index";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const balance = useGameStore((state) => state.balance);
  const totalBetAmount = useGameStore((state) => state.totalBetAmount);
  const netGain = useGameStore((state) => state.netGain);

  return (
    <div className="bg-neutral-900 py-2">
      <div className="flex gap-x-4 justify-center">
        <span>
          <span className="font-bold text-yellow-400">{t("balance")}:</span>{" "}
          <span className="font-bold text-white">{balance}</span>
        </span>
        <span>
          <span className="font-bold text-yellow-400">{t("bet")}:</span>{" "}
          <span className="font-bold text-white">{totalBetAmount}</span>
        </span>
        <span>
          <span className="font-bold text-yellow-400">{t("win")}:</span>{" "}
          <span className="font-bold text-white">{netGain}</span>
        </span>
      </div>
    </div>
  );
};

export default Header;
