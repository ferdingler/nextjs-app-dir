import { NextResponse } from "next/server";
import hello from "./hello";

export async function GET() {
  console.log("GET REQUEST");
  return NextResponse.json({
    type: "GET REQUEST",
    data: await hello(),
  });
}

export async function POST() {
  console.log("POST REQUEST");
  return NextResponse.json({
    type: "POST REQUEST",
    data: { username: "@choubari_", url: "choubari.com" },
  });
}
