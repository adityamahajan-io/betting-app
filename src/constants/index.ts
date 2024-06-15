import i18n from "../i18n";

export const BET_CHOICES = [
  {
    title: () => i18n.t("betType.rock"),
    id: "rock",
    fillColor: "bg-blue-950/70",
    borderColor: "border-blue-700 border-2",
    textColor: "text-blue-700",
  },
  {
    title: () => i18n.t("betType.paper"),
    id: "paper",
    fillColor: "bg-green-900/50",
    borderColor: "border-green-600 border-2",
    textColor: "text-green-600",
  },
  {
    title: () => i18n.t("betType.scissor"),
    id: "scissor",
    fillColor: "bg-red-900/50",
    borderColor: "border-red-600 border-2",
    textColor: "text-red-600",
  },
];

export const BET_AMOUNT: number = 500;
export const STARTING_BALANCE: number = 5000;
