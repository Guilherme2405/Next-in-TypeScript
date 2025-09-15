import { prisma } from "@/src/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { username, name } = await req.json();
  const user = await prisma.user.create({
    data: { username, name },
  });
  return NextResponse.json(user, { status: 201 });
}