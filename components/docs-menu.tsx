"use client";

import { ROUTES, BOTTOM_ROUTES } from "@/lib/routes-config";
import SubLink from "./sublink";
import { usePathname } from "next/navigation";

export default function DocsMenu({ isSheet = false }) {
  const pathname = usePathname();
  if (!/^\/[a-z]{2}\/docs/.test(pathname)) return null;

  return (
    <div className="flex flex-col gap-3.5 mt-5 pr-2 pb-6">
      {/* Main routes */}
      {ROUTES.map((item, index) => {
        const modifiedItems = {
          ...item,
          href: `/docs${item.href}`,
          level: 0,
          isSheet,
        };
        return <SubLink key={item.title + index} {...modifiedItems} />;
      })}
      
      {/* Separator */}
      <div className="border-t border-border my-4"></div>
      
      {/* Bottom routes */}
      {BOTTOM_ROUTES.map((item, index) => {
        const modifiedItems = {
          ...item,
          href: `/docs${item.href}`,
          level: 0,
          isSheet,
        };
        return <SubLink key={item.title + "bottom" + index} {...modifiedItems} />;
      })}
    </div>
  );
}
