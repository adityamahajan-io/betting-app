import classNames from "classnames";
import React from "react";
import { useGameStore } from "../store";

type Props = {
  title: string;
  fillColor: string;
  borderColor: string;
  textColor: string;
  id: string;
};

const BetCard = ({ title, fillColor, borderColor, textColor, id }: Props) => {
  const { placeBet, bets } = useGameStore();

  return (
    <div
      className={classNames(
        "border w-48 h-48 flex flex-col items-center p-2 rounded-lg cursor-pointer select-none",
        fillColor,
        borderColor
      )}
      onClick={() => placeBet(id)}
    >
      {/* this circle needs to always be circle regardless of the number inside */}
      {bets[id] && (
        <div className="bg-white rounded-full p-4 border-blue-600 border-4">
          {bets[id]}
        </div>
      )}
      <div className={classNames("mt-auto uppercase font-bold", textColor)}>
        {title}
      </div>
    </div>
  );
};

export default BetCard;
