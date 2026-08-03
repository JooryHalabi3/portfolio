import type { Locale } from "@/lib/i18n";

import { ar } from "./ar";
import { en } from "./en";

export type Dictionary = typeof en;

const dictionaries: Record<
  Locale,
  Dictionary
> = {
  ar,
  en,
};

export function getDictionary(
  locale: Locale,
): Dictionary {
  return dictionaries[locale];
}