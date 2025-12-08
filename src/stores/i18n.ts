import { derived, readonly, writable } from "svelte/store";
import { DEFAULT_LANGUAGE_CODE } from "@/utils/constants/i18n";
import type { LanguageCodes } from "@/utils/types/i18n";
import en from "@/i18n/en.json";
import es from "@/i18n/es.json";

//#region -- STATE --
const locale = writable<LanguageCodes>(DEFAULT_LANGUAGE_CODE);
const translations: Record<LanguageCodes, Record<string, string>> = {
  en,
  es,
};
//#endregion

//#region -- GETTERS --
const translate = derived(
  locale,
  ($locale) => (key: string) => translations[$locale]?.[key] ?? key,
);
//#endregion

//#region -- SETTERS --
const setLocale = (newLocale: LanguageCodes = DEFAULT_LANGUAGE_CODE) =>
  locale.set(newLocale);
//#endregion

export const i18nStore = {
  locale: readonly(locale),
  setLocale,
  t: translate,
};
