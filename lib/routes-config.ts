// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "getting_started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "introduction", href: "/introduction" },
    ],
  },
  {
    title: "basics",
    href: "/basics",
    noLink: true,
    items: [
      {
        title: "git",
        href: "/git",
        noLink: true,
        items: [
          { title: "introduction", href: "/introduction" },
          { title: "installation", href: "/installation" },
          { title: "versioning", href: "/versioning" },
          { title: "git_functions", href: "/git-functions" },
          { title: "commands", href: "/commands" },
          { title: "branches", href: "/branches" },
          { title: "collaborative_work", href: "/collaborative-work" },
        ],
      },
      { title: "gitflow", href: "/gitflow" },
      {
        title: "methodology",
        href: "/methodology",
        noLink: true,
        items: [
          { title: "agile_method", href: "/agile-method" },
          { title: "velocity", href: "/velocity" },
          { title: "planning_poker", href: "/planning-poker" },
        ],
      },
    ],
  },
];

export const BOTTOM_ROUTES: EachRoute[] = [
  {
    title: "contributing",
    href: "/contributing",
  },
  {
    title: "credits",
    href: "/credits",
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

const main_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
const bottom_routes = BOTTOM_ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();

export const page_routes = [...main_routes, ...bottom_routes];
