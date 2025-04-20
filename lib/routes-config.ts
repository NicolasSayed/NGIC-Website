// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "RAPID‑X",
    href: "",
    noLink: true,
    items: [
      // Project section
      {
        title: "Project",
        href: "/project",
        items: [
          { title: "Overview", href: ""     },
          { title: "Team",     href: "/team"     },
          { title: "Files",    href: "../../../files"    },
        ],
      },

      // Conceptual section
      {
        title: "Conceptual",
        href: "/conceptual",
        items: [
          { title: "RTL",          href: "/rtl"           },
          { title: "ASIC Concepts", href: "/asic-concepts" },
          { title: "ASIC Tools",    href: "/asic-tools"    },
          { title: "ASIC Files",    href: "/asic-files"    },
        ],
      },

      // Practical section
      {
        title: "Practical",
        href: "/practical",
        items: [
          { title: "Connecting to a Linux Server", href: "/connecting-to-a-linux-server" },
          { title: "Connecting to a VNC",          href: "/connecting-to-a-vnc"          },
          { title: "Git",                           href: "/git"                         },
          { title: "Working with Git",              href: "/working-with-git"            },
          { title: "Setting Up Your Repository For ASIC Work", href: "/setting-up-your-repository-for-asic-work" },
          {
            title: "Tips and Tricks",
            href: "/tips-and-tricks",
            items: [
              { title: "Linux Screen", href: "/linux-screen" },
            ],
          },
        ],
      },

      // References section
      {
        title: "References and External Resources",
        href: "/references-and-external-resources",
        items: [
          { title: "Question and Answer", href: "/question-and-answer" },
        ],
      },
    ],
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

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
