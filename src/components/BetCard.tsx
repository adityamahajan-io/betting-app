import classNames from "classnames";
import React from "react";

type Props = {
  title: string;
  fillColor: string;
  borderColor: string;
  textColor: string;
};

const BetCard = ({ title, fillColor, borderColor, textColor }: Props) => {
  return (
    <div
      className={classNames(
        "border w-48 h-48 flex flex-col items-center p-2 rounded-lg cursor-pointer",
        fillColor,
        borderColor
      )}
    >
      <div className={classNames("mt-auto uppercase font-bold", textColor)}>
        {title}
      </div>
    </div>
  );
};

export default BetCard;
