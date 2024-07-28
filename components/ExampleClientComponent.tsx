"use client";
import { useTranslation } from "react-i18next";
const ExampleCLientComponent = ({ locale }: any) => {
  const userName = "jyotirmoy";
  const { t } = useTranslation();
  return <div>{t("subheader", { userName })}</div>;
};

export default ExampleCLientComponent;
