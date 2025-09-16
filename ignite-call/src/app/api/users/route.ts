import { prisma } from "@/src/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { NextApiResponse, NextApiRequest } from "next";
import { setCookie } from "nookies";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
  const { username, name } = req.body;



  const userExists = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (userExists) {
    return NextResponse.json({ error: "Username already exists" }, { status: 400 });
  }

  const user = await prisma.user.create({
    data: { username, name },
  });

  setCookie({ res }, "user", user.id, 
    {
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    }
  );

  return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}