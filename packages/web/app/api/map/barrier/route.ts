import {kv} from '@vercel/kv'
import {NextRequest, NextResponse} from 'next/server'

export async function GET(request: NextRequest) {
  const data = await kv.get<number[][]>('barrier_map_data')

  return NextResponse.json(data)
}
