import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  // 'https://vercel.com/templates/next.js/portfolio-starter-kit': {
  //   name: 'deploy',
  // },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-blue-600 dark:hover:text-blue-400 flex align-middle relative py-1 px-2 m-1 overflow-hidden group"
                >
                  <span className="relative z-10">{name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600  transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
