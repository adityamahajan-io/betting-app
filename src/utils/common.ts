import { GAME_CHOICES, GAME_RESULTS, WINNING_CONDITIONS } from "../constants";

function hashCode(s: string): number {
  let hash = 0;
  if (s.length === 0) {
    return hash;
  }
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash;
}

function hashArgs(args: any[]): string {
  const argString = JSON.stringify(args);
  return String(hashCode(argString));
}

function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map<string, ReturnType<T>>();

  return function (...args: Parameters<T>): ReturnType<T> {
    const key = hashArgs(args);
    if (cache.has(key)) {
      return cache.get(key) as ReturnType<T>;
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  } as T;
}

export const getRandomPosition = () => {
  const choices = Object.keys(GAME_CHOICES) as GAME_CHOICES[];
  return choices[Math.floor(Math.random() * choices.length)] as GAME_CHOICES;
};

export const getBetResult = memoize(
  (
    playerBets: GAME_CHOICES[],
    computerBet: GAME_CHOICES | null
  ): { successBet: GAME_CHOICES | null; result: GAME_RESULTS } => {
    if (computerBet === null) {
      return {
        successBet: null,
        result: GAME_RESULTS.Loss,
      };
    }

    if (playerBets.includes(computerBet)) {
      return { successBet: computerBet, result: GAME_RESULTS.Draw };
    } else {
      const winningPlayerBet = playerBets.find((bet) =>
        WINNING_CONDITIONS[bet].includes(computerBet)
      );

      const isWin = winningPlayerBet !== undefined;

      return {
        successBet: isWin ? winningPlayerBet : computerBet,
        result: isWin ? GAME_RESULTS.Win : GAME_RESULTS.Loss,
      };
    }
  }
);
