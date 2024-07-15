"use server";

import { kv } from "@vercel/kv";

export async function updateMapData(barrierMapData: number[][]) {
  await kv.set("barrier_map_data", barrierMapData);
}
