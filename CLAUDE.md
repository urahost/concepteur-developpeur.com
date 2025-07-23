# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development:**
- `npm run dev` - Start development server
- `npm run build` - Build production bundle  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

**Note:** This project uses React 19 and may require `npm install --force` to resolve peer dependency warnings.

## Architecture Overview

This is **AriaDocs** - a Next.js 15 internationalized documentation template with MDX support. The codebase implements a multi-language documentation system with blogs, nested routing, and comprehensive MDX processing.

### Core Architecture

**Internationalization (i18n):**
- Three supported locales: `en`, `fr`, `ja` (lib/locale.ts:1)
- Middleware handles automatic locale detection and URL rewriting (middleware.ts:4)
- Dictionary-based translations with React context (lib/dictionaries.ts:1, components/contexts/dictionary-provider.tsx)
- All content is organized by language in `contents/` directory

**Routing Structure:**
- Uses Next.js App Router with dynamic `[lang]` segments
- Routes configured in `lib/routes-config.ts` with hierarchical structure
- Automatic static page generation for all supported locales (app/[lang]/layout.tsx:70)

**Content Management:**
- MDX files organized in `contents/docs/[lang]/` and `contents/blogs/[lang]/`
- Comprehensive MDX processing with syntax highlighting, auto-linking, and custom components (lib/markdown.ts:1)
- Frontmatter support for metadata extraction
- Dynamic route generation from filesystem structure

**Key Components:**
- **Markdown Processing:** Custom MDX pipeline with rehype/remark plugins for code highlighting, TOC generation, and component embedding
- **Navigation:** Dynamic sidebar generation from route configuration with nested structure support
- **Theme System:** next-themes integration with light/dark mode toggle
- **Search:** Built-in search functionality across documentation
- **Typography:** Tailwind-based responsive design with custom component library

### File Structure Patterns

**Content Organization:**
```
contents/
├── docs/[lang]/          # Documentation pages
└── blogs/[lang]/         # Blog posts
```

**Component Architecture:**
- `components/ui/` - Radix UI-based component library
- `components/markdown/` - Custom MDX components for rich content
- `components/contexts/` - React contexts for theme and i18n

**Library Functions:**
- `lib/markdown.ts` - MDX compilation, TOC extraction, content parsing
- `lib/routes-config.ts` - Navigation structure and route definitions
- `lib/dictionaries.ts` - Translation loading and caching
- `lib/locale.ts` - Locale detection and validation utilities

### Development Patterns

**Adding New Documentation:**
1. Create MDX files in `contents/docs/[lang]/[category]/[page]/index.mdx`
2. Update `ROUTES` array in `lib/routes-config.ts` with new navigation entries
3. Add translations for route titles in all language dictionary files (`dictionaries/`)

**Content Structure:**
- All MDX files must include frontmatter with `title` and `description`
- Blog posts require additional fields: `date`, `authors`, `cover`
- Custom components available in MDX: `Tabs`, `Note`, `Stepper`, `Image`, `Link`, `Outlet`

**Styling:**
- Tailwind CSS with custom design system
- Component variants using `class-variance-authority`
- Custom fonts: Space Grotesk (sans), Space Mono (mono)
- Consistent spacing and typography through utility classes

**State Management:**
- React Context for dictionary and theme state
- No external state management library required
- Cached dictionary loading with React's `cache()` function