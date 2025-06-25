"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* לוגו */}
        <Link href="/" className="font-bold text-xl">
          דשבורד תאונות
        </Link>

        {/* תפריט במובייל */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="text-white" size="icon">
                <Menu size={24} />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="bg-blue-700 text-white p-4">
              <nav className="flex flex-col gap-4 mt-6">
                <Link href="/" className="hover:underline">
                  בית
                </Link>
                <Link href="/reports" className="hover:underline">
                  דיווחים
                </Link>
                <Link href="/new" className="hover:underline">
                  דיווח חדש
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* תפריט בדסקטופ */}
        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <Link href="/" className="hover:underline">
              בית
            </Link>
          </li>
          <li>
            <Link href="/reports" className="hover:underline">
              דיווחים
            </Link>
          </li>
          <li>
            <Link href="/new" className="hover:underline">
              דיווח חדש
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
