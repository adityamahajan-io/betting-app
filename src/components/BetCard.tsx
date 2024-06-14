import React from "react";

type Props = {
  title: string;
};

const BetCard = ({ title }: Props) => {
  return (
    <div className="border w-48 h-48 flex flex-col items-center p-2 rounded-md cursor-pointer">
      <div className="mt-auto uppercase font-bold">{title}</div>
    </div>
  );
};

export default BetCard;
