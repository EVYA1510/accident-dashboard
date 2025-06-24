import { db } from "@/db";
import { accidentReports } from "@/db/schema";

export async function testDatabaseConnection() {
  try {
    // Test basic connection by counting records
    const result = await db.select().from(accidentReports).limit(1);
    console.log("✅ Database connection successful!");
    console.log(`Found ${result.length} records in accident_reports table`);
    return true;
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    return false;
  }
}
