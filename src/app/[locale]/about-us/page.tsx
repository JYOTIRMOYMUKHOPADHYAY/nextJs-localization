import React from 'react'
import style from "./style.module.css"
import { useTranslations } from 'next-intl';
import { Link } from '@/app/navigation';
const AboutUs = () => {
  const t = useTranslations("about-us");
    const user = {
        name: "Jyotirmoy",
        country: "India",
        company: "FirstSource"
    }

  return (
    <div className={style.div}>
        <p>{t("header")}</p>
        <p>{t("name", {name: user.name})}</p>
        <p>{t("country",{country: user.country})}</p>
        <p>{t("company", {company: user.company})}</p>
        <Link href="/">{t("go-back")}</Link>
    </div>
  )
}

export default AboutUs