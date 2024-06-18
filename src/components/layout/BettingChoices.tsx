import React from "react";
import { BET_CHOICES } from "../../constants";
import BetCard from "../BetCard";
import withDisabledClicks from "../helpers/withDisabledClicks";
import { ToastContainer, toast, Bounce } from "react-toastify";

const BettingChoices = () => {
  const showToast = (message: string) => {
    toast(message, {
      toastId: message,
      position: "bottom-center",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Bounce,
      className: "normal-case",
    });
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-3 md:gap-5 mb-8">
        {BET_CHOICES.map((choice) => (
          <BetCard
            id={choice.id}
            title={choice.title()}
            fillColor={choice.styling.fillColor}
            borderColor={choice.styling.borderColor}
            textColor={choice.styling.textColor}
            showToast={showToast}
          />
        ))}
      </div>
      <ToastContainer />
    </>
  );
};

const BetChoicesWithDisabledClicks = withDisabledClicks(BettingChoices);

export default BetChoicesWithDisabledClicks;
