import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request: NextRequest) {
  const data = await kv.get<
    Record<string, { x: number; y: number; scale: number }>
  >("mobs_position_map_data");

  return NextResponse.json(data);
}

const UpdateMapInputSchema = z.object({
  data: z.record(
    z.object({
      x: z.number(),
      y: z.number(),
      scale: z.number(),
    })
  ),
});

export async function PUT(request: NextRequest) {
  const inputs = UpdateMapInputSchema.parse(await request.json());

  const data = inputs.data;

  const res = await kv.set("mobs_position_map_data", data);

  return NextResponse.json(res);
}
