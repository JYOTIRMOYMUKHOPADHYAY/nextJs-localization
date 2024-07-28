import { useTranslations } from "next-intl";
import style from "./style.module.css";
import { Link } from "../navigation";
export default function HomePage() {
  const t = useTranslations("Home");
  return (
    <>
      <div className={style.div}>
        <h1>{t("header")}</h1>
        <h3>{t("subheader")}</h3>
        <p>{t("details")}</p>
        <Link href="/about-us">{t("navigation")}</Link>
      </div>
    </>
  );
}
