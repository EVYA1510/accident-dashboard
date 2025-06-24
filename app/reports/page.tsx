"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function ReportsPage() {
  const searchParams = useSearchParams();
  const departmentFromUrl = searchParams.get("department") || "כל המחלקות";

  const [selectedDepartment, setSelectedDepartment] =
    useState(departmentFromUrl);

  const departments = [
    "כל המחלקות",
    "בטיחות",
    "תחזוקה",
    "משאבי אנוש",
    "לוגיסטיקה",
    "IT",
    "כספים",
    "שיווק",
    "רכש",
    "פיתוח",
    "הדרכה",
    "תמיכה טכנית",
    "תפעול",
    "הנהלה",
    "שירות לקוחות",
    "משפטי",
    "ביטחון",
    "מחקר",
    "מעבדה",
    "שירותי ניקיון",
    "בינוי",
    "אנרגיה",
    "תחבורה",
    "ניהול פרויקטים",
    "בריאות תעסוקתית",
    "קהילה",
    "מחשוב רפואי",
    "תקשורת",
    "שירותי מזון",
    "מחסן מרכזי",
    "הנדסה",
    "שימור איכות",
    "תשתיות",
    "קהילה ובינוי",
  ];

  return (
    <section className="space-y-6 max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-800">רשימת דיווחים</h1>

      <div className="max-w-xs">
        <Select
          value={selectedDepartment}
          onValueChange={(value) => setSelectedDepartment(value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="בחר מחלקה" />
          </SelectTrigger>
          <SelectContent>
            {departments.map((dep) => (
              <SelectItem key={dep} value={dep}>
                {dep}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <p className="text-gray-700">
        מציג כעת דיווחים עבור:{" "}
        <span className="font-bold text-blue-700">{selectedDepartment}</span>
      </p>

      {/* כאן נטען את קומפוננטת התצוגה בהתאם למחלקה */}
    </section>
  );
}
