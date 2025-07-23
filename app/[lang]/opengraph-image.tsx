import { ImageResponse } from 'next/og'
import { getDictionary } from '@/lib/dictionaries'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'CDA Valenciennes P2 - Documentation'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'fr' | 'en')
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          color: 'black',
          padding: '80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Header avec logo/nom */}
        <div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            paddingBottom: '10px',
          }}
        >
          
        </div>

        {/* Contenu principal */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '40px',
            marginTop: '-120px',
          }}
        >
          <div
            style={{
              fontSize: '18px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              opacity: 0.6,
            }}
          >
            {dict.navbar.links.documentation}
          </div>
          
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              lineHeight: 1.0,
              maxWidth: '950px',
            }}
          >
            {dict.home.main_header}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
            fontSize: '16px',
            opacity: 0.6,
          }}
        >
          <div>https://concepteur-developpeur.com</div>
          <div>github.com/urahost/concepteur-developpeur.com</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}