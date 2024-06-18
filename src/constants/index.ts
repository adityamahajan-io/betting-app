import i18n from "../i18n";

export enum GAME_STATES {
  BeforeStart,
  InProgress,
  Completed,
}

export enum GAME_RESULTS {
  Win,
  Loss,
  Draw,
}

export enum GAME_CHOICES {
  Rock = "Rock",
  Paper = "Paper",
  Scissor = "Scissor",
}

export const BET_CHOICES_STYLING = {
  [GAME_CHOICES.Rock]: {
    fillColor: "bg-blue-950/70",
    borderColor: "border-blue-600 border-2",
    textColor: "text-blue-600",
  },
  [GAME_CHOICES.Paper]: {
    fillColor: "bg-green-900/50",
    borderColor: "border-green-600 border-2",
    textColor: "text-green-600",
  },
  [GAME_CHOICES.Scissor]: {
    fillColor: "bg-red-900/50",
    borderColor: "border-red-600 border-2",
    textColor: "text-red-600",
  },
};

export const BET_CHOICES = [
  {
    title: () => i18n.t("betType.rock"),
    id: GAME_CHOICES.Rock,
    styling: BET_CHOICES_STYLING[GAME_CHOICES.Rock],
  },
  {
    title: () => i18n.t("betType.paper"),
    id: GAME_CHOICES.Paper,
    styling: BET_CHOICES_STYLING[GAME_CHOICES.Paper],
  },
  {
    title: () => i18n.t("betType.scissor"),
    id: GAME_CHOICES.Scissor,
    styling: BET_CHOICES_STYLING[GAME_CHOICES.Scissor],
  },
];

export const BET_AMOUNT: number = 500;
export const STARTING_BALANCE: number = 5000;
export const MAX_BETTING_POSITIONS = 2;
export const INITIAL_BET_AMOUNT = 0;
export const SINGLE_BET_WIN_MULTIPLIER = 14;
export const DOUBLE_BET_WIN_MULTIPLER = 3;

export const WINNING_CONDITIONS: Record<GAME_CHOICES, GAME_CHOICES> = {
  [GAME_CHOICES.Rock]: GAME_CHOICES.Scissor,
  [GAME_CHOICES.Paper]: GAME_CHOICES.Rock,
  [GAME_CHOICES.Scissor]: GAME_CHOICES.Paper,
};
