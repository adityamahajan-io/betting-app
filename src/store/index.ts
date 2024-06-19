import { create } from "zustand";
import {
  BET_AMOUNT,
  DOUBLE_BET_WIN_MULTIPLER,
  GAME_CHOICES,
  GAME_RESULTS,
  GAME_STATES,
  INITIAL_BET_AMOUNT,
  SINGLE_BET_WIN_MULTIPLIER,
  STARTING_BALANCE,
} from "../constants";
import { getBetResult, getRandomPosition } from "../utils/common";

export interface Bet {
  [id: string]: number;
}

interface GameState {
  balance: number;
  placeBet: (choice: string) => void;
  reduceBet: (choice: string) => void;
  playGame: () => void;
  initializeGame: () => void;
  resetBets: () => void;
  gameState: GAME_STATES;
  gameResult: {
    successBet: string | null;
    outcome: GAME_RESULTS | null;
  };
  computerBet: GAME_CHOICES | null;
  netGain: number;
  bets: Bet;
  totalBetAmount: number;
}

export const useGameStore = create<GameState>((set) => ({
  balance: STARTING_BALANCE,
  bets: {} as Bet,
  netGain: 0,
  computerBet: null,
  totalBetAmount: INITIAL_BET_AMOUNT,
  gameState: GAME_STATES.BeforeStart,
  gameResult: {
    successBet: null,
    outcome: null,
  },
  placeBet: (betType) =>
    set((state) => ({
      balance: state.balance - BET_AMOUNT,
      bets: {
        ...state.bets,
        [betType]: (state.bets[betType] || 0) + BET_AMOUNT,
      },
      totalBetAmount: state.totalBetAmount + BET_AMOUNT,
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
      const newState = {
        gameState: GAME_STATES.InProgress,
        computerBet: getRandomPosition(),
      };

      setTimeout(() => {
        state.playGame();
      }, 1500);

      return newState;
    }),
  playGame: () =>
    set((state) => {
      const playerBets = Object.keys(state.bets) as GAME_CHOICES[];

      const { result, successBet } = getBetResult(
        playerBets,
        state.computerBet
      );

      let newBalance = state.balance;
      let netGain = 0;

      if (result === GAME_RESULTS.Win) {
        if (playerBets.length === 1) {
          newBalance += state.totalBetAmount * SINGLE_BET_WIN_MULTIPLIER;
          netGain = state.totalBetAmount * SINGLE_BET_WIN_MULTIPLIER;
        } else {
          newBalance += state.totalBetAmount * DOUBLE_BET_WIN_MULTIPLER;
          netGain = state.totalBetAmount * DOUBLE_BET_WIN_MULTIPLER;
        }
      }

      if (result === GAME_RESULTS.Draw) {
        if (playerBets.length === 1) {
          newBalance += state.totalBetAmount;
          netGain = state.totalBetAmount;
        }
      }

      return {
        balance: newBalance,
        gameResult: { outcome: result, successBet: successBet },
        gameState: GAME_STATES.Completed,
        netGain,
      };
    }),
  resetBets: () =>
    set(() => {
      return {
        bets: {},
        gameState: GAME_STATES.BeforeStart,
        gameResult: { outcome: null, successBet: null },
        totalBetAmount: INITIAL_BET_AMOUNT,
        netGain: 0,
      };
    }),
}));
