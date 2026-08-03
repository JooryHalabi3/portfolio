"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const savedLocale =
      window.localStorage.getItem("locale");

    const locale =
      savedLocale === "en" ? "en" : "ar";

    router.replace(`/${locale}`);
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />

        <p className="text-sm text-text-secondary">
          Loading...
        </p>
      </div>
    </main>
  );
}