import Image from "next/image";
import styles from "./page.module.css";

import Link from "next/link";
import initTranslations from "../i18n";
import TranslationsProvider from "../../components/TranslationsProvider";
import ExampleCLientComponent from "../../components/ExampleClientComponent";
import LanguageChanger from "@/components/LanguageCHanger";
const i18nNamespaces = ["home", "common"];
export default async function Home({ params: { locale } }: any) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className={styles.main}>
        <h1>{t("header")}</h1>
        <ExampleCLientComponent locale={locale} />
        <Link href="/about-us">{t("common:about_us")}</Link>
        <LanguageChanger />
      </main>
    </TranslationsProvider>
  );
}
