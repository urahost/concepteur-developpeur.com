import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const path = searchParams.get('path')
    const lang = searchParams.get('lang') || 'fr'
    const type = searchParams.get('type') || 'docs'

    // Load dictionary manually for edge runtime
    const dictResponse = await fetch(`${request.nextUrl.origin}/api/dictionaries/${lang}`)
    const dict = await dictResponse.json()
    
    let title = dict.home.main_header
    let description = dict.metadata.description
    let breadcrumb = ''

    // For docs pages, try to get content info
    if (path && type === 'docs') {
      // Create breadcrumb from path
      const pathParts = path.split('/').filter(Boolean)
      breadcrumb = pathParts.map((part) => {
        const key = part.replace(/-/g, '_')
        return dict.leftbar?.[key] || part.replace(/-/g, ' ')
      }).join(' › ')
      
      // Better title handling for specific pages
      const lastPart = pathParts[pathParts.length - 1]
      if (lastPart === 'introduction' && pathParts[0] === 'getting-started') {
        title = dict.leftbar?.getting_started || 'Bienvenue'
        description = lang === 'fr' 
          ? 'Découvrez la documentation de formation CDA Valenciennes P2' 
          : 'Discover the CDA Valenciennes P2 training documentation'
      } else {
        // Use generic title/description for other docs pages
        title = dict.leftbar?.[lastPart?.replace(/-/g, '_')] || lastPart?.replace(/-/g, ' ') || 'Documentation'
        description = dict.metadata.description
      }
    }

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
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
              }}
            >
              {dict.home.name}
            </div>
            
            <div
              style={{
                fontSize: '16px',
                fontWeight: '500',
                opacity: 0.7,
                backgroundColor: '#f5f5f5',
                padding: '8px 16px',
                borderRadius: '20px',
              }}
            >
              {lang.toUpperCase()}
            </div>
          </div>

          {/* Contenu principal */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '20px',
              marginTop: '-80px',
            }}
          >
            {/* Breadcrumb */}
            {breadcrumb && (
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  opacity: 0.6,
                }}
              >
                {breadcrumb}
              </div>
            )}
            
            <div
              style={{
                fontSize: path ? '56px' : '72px',
                fontWeight: 'bold',
                lineHeight: 1.1,
                maxWidth: '900px',
              }}
            >
              {title}
            </div>
            
            <div
              style={{
                fontSize: '24px',
                opacity: 0.8,
                maxWidth: '800px',
                lineHeight: 1.4,
              }}
            >
              {description}
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
              fontSize: '18px',
              opacity: 0.7,
            }}
          >
            <div>https://concepteur-developpeur.com</div>
            <div>
              {type === 'docs' ? dict.opengraph?.documentation_formation : dict.opengraph?.formation_cda}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    console.log(`${e instanceof Error ? e.message : 'Unknown error'}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}