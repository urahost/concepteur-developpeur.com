import { NextRequest, NextResponse } from 'next/server'
import { getDictionary } from '@/lib/dictionaries'

export async function GET(request: NextRequest, { params }: { params: Promise<{ lang: string }> }) {
  try {
    const { lang } = await params
    const dict = await getDictionary(lang as 'fr' | 'en')
    
    return NextResponse.json(dict, {
      headers: {
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      },
    })
  } catch {
    return NextResponse.json({ error: 'Dictionary not found' }, { status: 404 })
  }
}