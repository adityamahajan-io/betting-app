import { create } from "zustand";
import { BET_AMOUNT, INITIAL_BET_AMOUNT, STARTING_BALANCE } from "../constants";

export interface Bet {
  [id: string]: number;
}

interface GameState {
  balance: number;
  placeBet: (choice: string) => void;
  reduceBet: (choice: string) => void;
  bets: Bet;
  totalBetAmount: number;
}

export const useGameStore = create<GameState>((set) => ({
  balance: STARTING_BALANCE,
  bets: {} as Bet,
  totalBetAmount: INITIAL_BET_AMOUNT,
  placeBet: (betType) =>
    set((state) => ({
      balance: state.balance - BET_AMOUNT,
      bets: {
        ...state.bets,
        [betType]: (state.bets[betType] || 0) + BET_AMOUNT,
      },
      totalBetAmount: (state.totalBetAmount || 0) + BET_AMOUNT,
    })),
  reduceBet: (betType) =>
    set((state) => {
      const reducedAmount = state.bets[betType] - BET_AMOUNT;
      const newBets = { ...state.bets };

      if (reducedAmount <= 0) {
        delete newBets[betType];
      } else {
        newBets[betType] = reducedAmount;
      }

      return {
        balance: state.balance + BET_AMOUNT,
        bets: newBets,
        totalBetAmount: state.totalBetAmount - BET_AMOUNT,
      };
    }),
}));
