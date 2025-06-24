import { NextResponse } from "next/server";
import { testDatabaseConnection } from "@/lib/db-test";

export async function GET() {
  try {
    const isConnected = await testDatabaseConnection();

    if (isConnected) {
      return NextResponse.json({
        status: "success",
        message: "Database connection successful",
      });
    } else {
      return NextResponse.json(
        {
          status: "error",
          message: "Database connection failed",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Database connection error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
