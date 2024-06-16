import { create } from "zustand";
import {
  BET_AMOUNT,
  DOUBLE_BET_WIN_MULTIPLER,
  INITIAL_BET_AMOUNT,
  SINGLE_BET_WIN_MULTIPLIER,
  STARTING_BALANCE,
} from "../constants";
import { getBetResult, getRandomPosition } from "../components/utils/common";

export interface Bet {
  [id: string]: number;
}

interface GameState {
  balance: number;
  placeBet: (choice: string) => void;
  reduceBet: (choice: string) => void;
  playGame: () => void;
  initializeGame: () => void;
  computerBet: string | null;
  // TODO: FIX TYPES FOR ALL
  bets: Bet;
  totalBetAmount: number;
}

export const useGameStore = create<GameState>((set) => ({
  balance: STARTING_BALANCE,
  bets: {} as Bet,
  computerBet: null,
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
  initializeGame: () =>
    set((state) => {
      return {
        computerBet: getRandomPosition(),
      };
    }),
  playGame: () =>
    set((state) => {
      const playerBets = Object.keys(state.bets);

      const result: string = getBetResult(playerBets, state.computerBet);

      let newBalance = state.balance;

      //   TODO: CONVERT TO SWITCH CASE
      if (result === "win") {
        if (playerBets.length === 1) {
          newBalance += state.totalBetAmount * SINGLE_BET_WIN_MULTIPLIER;
        } else {
          newBalance += state.totalBetAmount * DOUBLE_BET_WIN_MULTIPLER;
        }
      }

      if (result === "draw") {
        newBalance += state.totalBetAmount;
      }

      return {
        balance: newBalance,
        bets: {},
        totalBetAmount: INITIAL_BET_AMOUNT,
        computerBet: null,
        result,
      };
    }),
}));
