import classNames from "classnames";
import React, { SyntheticEvent } from "react";
import { useGameStore } from "../store";
import { MAX_BETTING_POSITIONS } from "../constants";
import { ChevronUp, ChevronDown } from "react-feather";
import { useTranslation } from "react-i18next";

type Props = {
  title: string;
  fillColor: string;
  borderColor: string;
  textColor: string;
  id: string;
};

const BetCard = ({ title, fillColor, borderColor, textColor, id }: Props) => {
  const { t } = useTranslation();
  const { placeBet, reduceBet, bets, balance } = useGameStore();

  const handlePlaceBet = () => {
    const positionsPicked = Object.keys(bets);
    if (balance <= 0) {
      alert("Insufficient balance!");
      return;
    }

    if (
      positionsPicked.length >= MAX_BETTING_POSITIONS &&
      !positionsPicked.includes(id)
    ) {
      alert("Too many!");
      return;
    }

    placeBet(id);
  };

  // TODO: FIX THIS. CANNOT BE ANY
  const handleReduceBet = (e: any) => {
    e.stopPropagation();
    reduceBet(id);
  };

  return (
    <div
      className={classNames(
        "border w-48 h-48 flex flex-col items-center p-4 rounded-lg cursor-pointer select-none",
        fillColor,
        borderColor
      )}
      onClick={() => handlePlaceBet()}
    >
      {bets[id] ? (
        <div className="my-auto">
          <div className="flex justify-center items-center gap-x-2">
            {/* this circle needs to always be circle regardless of the number inside */}
            <ChevronDown
              onClick={handleReduceBet}
              className={textColor}
              size={26}
            />
            <div className="bg-white rounded-full p-4 border-blue-600 border-4">
              {bets[id]}
            </div>
            <ChevronUp className={textColor} size={26} />
          </div>
        </div>
      ) : (
        <div className={classNames("font-bold", textColor)}>
          {t("placeYourBets")}
        </div>
      )}
      <div className={classNames("mt-auto uppercase font-bold", textColor)}>
        {title}
      </div>
    </div>
  );
};

export default BetCard;
