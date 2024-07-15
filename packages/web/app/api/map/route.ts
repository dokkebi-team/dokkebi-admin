import { kv } from "@vercel/kv";
import { produce } from "immer";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request: NextRequest) {
  const data = await kv.get<number[][]>("barrier_map_data");

  return NextResponse.json(data);
}

const UpdateMapInputSchema = z.array(
  z.object({
    maxRows: z.number(),
    maxCols: z.number(),
    rowIndex: z.number(),
    colIndex: z.number(),
    value: z.number(),
  })
);

export async function PUT(request: NextRequest) {
  const inputs = UpdateMapInputSchema.parse(await request.json());

  const _currentValue = await kv.get<number[][]>("barrier_map_data");

  const firstValue = inputs[0];

  if (!firstValue) {
    return NextResponse.json(_currentValue);
  }

  const currentValue =
    _currentValue ??
    new Array<number[]>(firstValue.maxRows).fill(
      new Array(firstValue.maxCols).fill(0)
    );

  const nextValue = produce(currentValue, (draft) => {
    inputs.forEach((input) => {
      draft[input.rowIndex][input.colIndex] = input.value;
    });
  });

  const res = await kv.set("barrier_map_data", nextValue);

  return NextResponse.json(res);
}
