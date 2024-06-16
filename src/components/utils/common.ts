import { BET_CHOICE_IDS, WINNING_CONDITIONS } from "../../constants";

export const getRandomPosition = () => {
  const choices = Object.values(BET_CHOICE_IDS);
  return choices[Math.floor(Math.random() * choices.length)];
};

//TODO: FIX THIS
export const getBetResult = (playerBets: any, computerBet: any) => {
  const isSingleBet = playerBets.length === 1;
  if (playerBets.includes(computerBet)) {
    return isSingleBet ? "draw" : "loss";
  } else {
    const isWin = playerBets.find(
      (bet: any) => WINNING_CONDITIONS[bet] === computerBet
    );

    return isWin ? "win" : "loss";
  }
};
