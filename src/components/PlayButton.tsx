import React from "react";
import { useTranslation } from "react-i18next";

type Props = {};

const PlayButton = (props: Props) => {
  const { t } = useTranslation();

  return <div className="border rounded-full px-4 py-1">{t("play")}</div>;
};

export default PlayButton;
