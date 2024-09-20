import { getPrismaClientDbMain } from "@/server/clients";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const prisma = getPrismaClientDbMain();

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

const UpdateMobInputSchema = z.object({
  id: z.number(),
  values: z.array(
    z.object({
      key: z.enum([
        "alias",
        "location",
        "notes",
        "species",
        "type",
        "description",
        "size",
        "illustrationUrl",
        "photoUrl",
      ]),
      value: z.string(),
    })
  ),
});

export async function PUT(request: NextRequest) {
  const input = UpdateMobInputSchema.parse(await request.json());

  const valuesParam = input.values.reduce(
    (acc, curr) => {
      acc[curr.key] = curr.value;
      return acc;
    },
    {} as Record<string, string>
  );

  const data = await prisma.mob.update({
    where: {
      id: input.id,
    },
    data: valuesParam,
  });

  return NextResponse.json("OK");
}
