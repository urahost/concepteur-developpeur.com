import LocalizedLink from "@/components/localized-link";
import { buttonVariants } from "@/components/ui/button";
import { HeroPill } from "@/components/ui/hero-pill";
import { getDictionary, LangProps } from "@/lib/dictionaries";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon } from "lucide-react";
import Link from "next/link";

export default async function Home({ params }: LangProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <div className="flex sm:min-h-[85.5vh] min-h-[85vh] flex-col items-center text-center px-2 sm:py-8 py-12">
      <div className="mt-8 mb-6">
        <HeroPill
          href="https://urahost.fr"
          label={dict.home.hero_pill.label}
          announcement={dict.home.hero_pill.announcement}
          isExternal
          className="bg-[hsl(187,80.8%,34.7%)]/20 ring-[hsl(210,40%,96.1%)] [&_div]:bg-[hsl(210,40%,96.1%)] [&_div]:text-[hsl(187,80.8%,34.7%)] [&_p]:text-[hsl(187,80.8%,34.7%)] [&_svg_path]:fill-[hsl(187,80.8%,34.7%)]"
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <Link
          href="https://github.com/urahost/concepteur-developpeur.com"
          target="_blank"
          className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
        >
          {dict.home.follow_github}
          <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
        </Link>
        <h1 className="text-3xl font-bold mb-4 sm:text-6xl">
          {dict.home.main_header}
        </h1>
        <p className="mb-8 sm:text-lg max-w-[1200px] text-muted-foreground">
          {dict.home.sub_header}
        </p>
        <div className="flex flex-row items-center gap-5">
          <LocalizedLink
            href={`/docs${page_routes[0].href}`}
            className={buttonVariants({ className: "px-6", size: "lg" })}
          >
            {dict.home.get_started}
          </LocalizedLink>
          <LocalizedLink
            href="/blog"
            className={buttonVariants({
              variant: "secondary",
              className: "px-6",
              size: "lg",
            })}
          >
            {dict.home.read_blog}
          </LocalizedLink>
        </div>
      </div>
    </div>
  );
}
