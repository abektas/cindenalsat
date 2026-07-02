export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'

// Redirect signup requests to the correct endpoint
export async function POST(req: Request) {
  const url = new URL(req.url)
  const signupUrl = `${url.origin}/api/signup`
  const body = await req.text()
  
  const res = await fetch(signupUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  })
  
  const data = await res.json()
  return NextResponse.json(data, { status: res.status })
}
