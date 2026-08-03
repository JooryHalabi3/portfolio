import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  defaultLocale,
  isLocale,
} from "@/lib/i18n";

export default async function RootPage() {
  const cookieStore = await cookies();
  const savedLocale =
    cookieStore.get("locale")?.value;

  const locale = isLocale(savedLocale ?? "")
    ? savedLocale
    : defaultLocale;

  redirect(`/${locale}`);
}