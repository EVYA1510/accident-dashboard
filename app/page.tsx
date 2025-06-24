"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";

export default function Home() {
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const departments = [
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

  const totalReports = 128;
  const recentReports = 12;
  const openTasks = 7;

  return (
    <section className="space-y-8 max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-800 text-center">
        ברוך הבא למערכת ניהול דיווחי תאונות
      </h1>

      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
        מערכת זו מאפשרת לך לצפות בדיווחים קיימים, להוסיף דיווחים חדשים ולנהל את
        המידע בצורה נוחה ומסודרת.
      </p>

      {/* בחירת מחלקה */}
      <div className="max-w-xs mx-auto">
        <Select
          value={selectedDepartment}
          onValueChange={(value) => setSelectedDepartment(value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="בחר מחלקה לצפייה בדיווחים" />
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

      {selectedDepartment && (
        <div className="text-center">
          <Link
            href={`/reports?department=${encodeURIComponent(
              selectedDepartment
            )}`}
          >
            <Button className="mt-4">
              מעבר לדיווחים של {selectedDepartment}
            </Button>
          </Link>
        </div>
      )}

      {/* סטטיסטיקות */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-700">
              סה&quot;כ דיווחים
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-700">{totalReports}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-700">
              דיווחים מהשבוע האחרון
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-700">{recentReports}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-700">
              משימות פתוחות
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-orange-600">{openTasks}</p>
          </CardContent>
        </Card>
      </div>

      {/* כרטיסי פעולות */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <Card className="hover:shadow-lg transition">
          <CardHeader>
            <CardTitle>📄 צפייה בדיווחים</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              עיין בכל הדיווחים שהוזנו למערכת בצורה מרוכזת.
            </p>
            <Link href="/reports">
              <Button variant="outline" className="w-full">
                מעבר לדיווחים
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition">
          <CardHeader>
            <CardTitle>➕ הוספת דיווח חדש</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              הוסף דיווח חדש למערכת בקלות ובמהירות.
            </p>
            <Link href="/new">
              <Button className="w-full">הוספת דיווח</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* דיווחים אחרונים */}
      <div className="space-y-4 mt-8">
        <h2 className="text-2xl font-bold text-blue-700 text-center">
          דיווחים אחרונים
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="hover:shadow transition">
            <CardHeader>
              <CardTitle>תאונה באתר בנייה</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">מיקום: תל אביב</p>

              <p className="text-gray-600 mb-2">דווח ע&quot;י: יוסי כהן</p>
              <Link href="/reports" className="text-blue-700 hover:underline">
                לצפייה בפרטים
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow transition">
            <CardHeader>
              <CardTitle>כשל במערכת חשמל</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">מיקום: אשדוד</p>ֿ
              <p className="text-gray-600 mb-2">דווח ע&quot;י: מירי לוי</p>; [{" "}
              <p className="text-gray-600 mb-2">דווח ע&quot;י: מירי לוי</p>]{" "}
              <Link href="/reports" className="text-blue-700 hover:underline">
                לצפייה בפרטים
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow transition">
            <CardHeader>
              <CardTitle>פציעה קלה במפעל</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">מיקום: חיפה</p>
              <p className="text-gray-600 mb-2">דווח ע&quot;י: רועי ישראלי</p>
              <Link href="/reports" className="text-blue-700 hover:underline">
                לצפייה בפרטים
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
