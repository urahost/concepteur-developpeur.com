import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { page_routes } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getDocsForSlug } from "@/lib/markdown";
import { Typography } from "@/components/typography";
import { getDictionary, LangProps } from "@/lib/dictionaries";

type PageProps = {
  params: Promise<{ slug: string[] }>;
} & LangProps;

export default async function DocsPage(props: PageProps) {
  const params = await props.params;

  const { slug = [], lang } = params;
  
  // Skip opengraph-image routes
  if (slug.includes('opengraph-image')) {
    notFound();
  }
  
  const slugWithLang = [lang, ...slug];
  const dict = await getDictionary(lang);
  const pathName = slugWithLang.join("/");
  const res = await getDocsForSlug(pathName);

  if (!res) notFound();
  return (
    <div className="flex items-start gap-10">
      <div className="flex-[4.5] pt-10">
        <Typography>
          <h1 className="text-3xl !-mt-1.5">{res.frontmatter.title}</h1>
          <p className="-mt-4 text-muted-foreground text-[16.5px]">
            {res.frontmatter.description}
          </p>
          <div>{res.content}</div>
          <Pagination pathname={slug.join("/")} dict={dict} />
        </Typography>
      </div>
      <Toc path={pathName} dict={dict} />
    </div>
  );
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const { slug = [], lang } = params;
  
  // Skip opengraph-image routes
  if (slug.includes('opengraph-image')) {
    return {};
  }
  
  const slugWithLang = [lang, ...slug];
  const pathName = slugWithLang.join("/");
  const res = await getDocsForSlug(pathName);
  if (!res) return {};
  const { frontmatter } = res;
  
  const url = `https://concepteur-developpeur.com/${lang}/docs/${slug.join("/")}`;
  
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://concepteur-developpeur.com' 
    : 'http://localhost:3000'
  const ogUrl = new URL('/api/og', baseUrl)
  ogUrl.searchParams.set('path', slug.join('/'))
  ogUrl.searchParams.set('lang', lang)
  ogUrl.searchParams.set('type', 'docs')

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url,
      siteName: 'CDA Valenciennes P2 - Documentation',
      locale: lang === 'fr' ? 'fr_FR' : 'en_US',
      type: 'article',
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
    },
    alternates: {
      canonical: url,
      languages: {
        'fr': `https://concepteur-developpeur.com/fr/docs/${slug.join("/")}`,
        'en': `https://concepteur-developpeur.com/en/docs/${slug.join("/")}`,
      },
    },
  };
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    slug: item.href.split("/").slice(1),
  })).filter((item) => !item.slug.includes('opengraph-image'));
}
