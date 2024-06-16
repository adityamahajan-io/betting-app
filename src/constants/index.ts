import i18n from "../i18n";

export const BET_CHOICE_IDS = {
  rock: "rock",
  paper: "paper",
  scissor: "scissor",
};

export const BET_CHOICES = [
  {
    title: () => i18n.t("betType.rock"),
    id: BET_CHOICE_IDS.rock,
    fillColor: "bg-blue-950/70",
    borderColor: "border-blue-700 border-2",
    textColor: "text-blue-700",
  },
  {
    title: () => i18n.t("betType.paper"),
    id: BET_CHOICE_IDS.paper,
    fillColor: "bg-green-900/50",
    borderColor: "border-green-600 border-2",
    textColor: "text-green-600",
  },
  {
    title: () => i18n.t("betType.scissor"),
    id: BET_CHOICE_IDS.scissor,
    fillColor: "bg-red-900/50",
    borderColor: "border-red-600 border-2",
    textColor: "text-red-600",
  },
];

export const BET_AMOUNT: number = 500;
export const STARTING_BALANCE: number = 5000;
export const MAX_BETTING_POSITIONS = 2;
export const INITIAL_BET_AMOUNT = 0;
export const SINGLE_BET_WIN_MULTIPLIER = 14;
export const DOUBLE_BET_WIN_MULTIPLER = 3;

export const WINNING_CONDITIONS = {
  [BET_CHOICE_IDS.rock]: BET_CHOICE_IDS.scissor,
  [BET_CHOICE_IDS.paper]: BET_CHOICE_IDS.rock,
  [BET_CHOICE_IDS.scissor]: BET_CHOICE_IDS.paper,
};
