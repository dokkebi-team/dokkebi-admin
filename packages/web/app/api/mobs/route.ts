import { getPrismaClientDbMain } from "@/modules/server/get-prisma-client-db-main";
import { NextRequest, NextResponse } from "next/server";

const prisma = getPrismaClientDbMain();

export const maxDuration = 10;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const skipParam = searchParams.get("skip");
  const takeParam = searchParams.get("take");
  const skip = skipParam ? parseInt(skipParam, 10) : undefined;
  const take = takeParam ? parseInt(takeParam, 10) : undefined;
  const data = await prisma.mob.findMany({
    skip,
    take,
    orderBy: {
      order: "asc",
    },
  });

  return NextResponse.json(data);
}
