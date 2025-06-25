"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b bg-white text-textMain sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="font-semibold text-lg hover:text-primary">
          דשבורד תאונות
        </Link>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={22} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white text-textMain p-4">
              <nav className="flex flex-col gap-4 mt-6">
                <Link href="/" className="hover:text-primary">
                  בית
                </Link>
                <Link href="/reports" className="hover:text-primary">
                  דיווחים
                </Link>
                <Link href="/new" className="hover:text-primary">
                  דיווח חדש
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <Link href="/" className="hover:text-primary">
              בית
            </Link>
          </li>
          <li>
            <Link href="/reports" className="hover:text-primary">
              דיווחים
            </Link>
          </li>
          <li>
            <Link href="/new" className="hover:text-primary">
              דיווח חדש
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
