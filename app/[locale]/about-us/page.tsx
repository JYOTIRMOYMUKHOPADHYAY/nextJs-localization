import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

import initTranslations from "../../i18n";
import TranslationsProvider from "../../../components/TranslationsProvider";
const i18nNamespaces = ["about-us", "common"];
const AboutUs = async ({ params: { locale } }: any) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className={styles.main}>
        <h1>{t("common:about_us")}</h1>
        <p>{t("about-details")}</p>
        <Link href="/">{t("back")}</Link>
      </main>
    </TranslationsProvider>
  );
};

export default AboutUs;
