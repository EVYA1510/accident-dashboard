import { Suspense } from "react";
import ReportsPageClient from "./ReportsPageClient";

export default function ReportsPage() {
  return (
    <Suspense fallback={<div>טוען נתונים...</div>}>
      <ReportsPageClient />
    </Suspense>
  );
}
