import {MobConfig} from '@/types'
import {kv} from '@vercel/kv'
import {NextRequest, NextResponse} from 'next/server'

export async function GET(request: NextRequest) {
  const data = await kv.get<Record<string, MobConfig>>('mobs_position_map_data')

  return NextResponse.json(data)
}
