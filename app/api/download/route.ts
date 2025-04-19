import { NextResponse } from "next/server"

export async function GET() {
  // Перенаправляем на статический файл вместо чтения файловой системы
  return NextResponse.redirect(
    new URL("/downloads/cyclone.apk", process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"),
  )
}
