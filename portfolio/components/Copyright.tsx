import { SITE } from "@/constants";

export default function Copyright() {
  return (
    <div className="bg-background px-6">
      <div className="mx-auto max-w-6xl border-t border-brand-border py-5 text-center">
        <p className="text-sm text-text-secondary">
          © 2026 {SITE.name}. All rights reserved.
        </p>
      </div>
    </div>
  );
}