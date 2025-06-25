import { Suspense } from "react";
import ReportsPageClient from "./ReportsPageClient";

export default function ReportsPage() {
  return (
    <Suspense
      fallback={
        <div className="text-center text-textSecondary">טוען נתונים...</div>
      }
    >
      <ReportsPageClient />
    </Suspense>
  );
}
