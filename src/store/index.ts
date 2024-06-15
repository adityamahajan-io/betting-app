import { create } from "zustand";
import { BET_AMOUNT, STARTING_BALANCE } from "../constants";

export interface Bet {
  [id: string]: number;
}

interface GameState {
  balance: number;
  placeBet: (choice: string) => void;
  bets: Bet;
}

export const useGameStore = create<GameState>((set) => ({
  balance: STARTING_BALANCE,
  bets: {} as Bet,
  placeBet: (betType) =>
    set((state) => ({
      balance: state.balance - BET_AMOUNT,
      bets: { ...state.bets, [betType]: (state.bets[betType] || 0) + 500 },
    })),
}));
