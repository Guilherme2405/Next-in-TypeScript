import { prisma } from "@/src/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { setCookie } from "nookies";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { username, name } = await req.json();

    const userExists = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (userExists) {
      return NextResponse.json(
        { error: "Username already exists" },
        { status: 400 }
      );
    }

    const user = await prisma.user.create({
      data: { username, name },
    });

    setCookie({ res }, "user", user.id, {
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
