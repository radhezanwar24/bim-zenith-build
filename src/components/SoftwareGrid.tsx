/**
 * Software / platform grid for the "Global Project Experience" section.
 * Uses Simple Icons CDN for brand logos where an official slug exists,
 * and falls back to an elegant monogram badge for the rest.
 * Every tile has the same footprint so the grid stays visually uniform.
 */

type Software = {
  name: string;
  /** Simple Icons slug — https://simpleicons.org/. Omit for a monogram tile. */
  slug?: string;
  /** Brand accent color (hex without leading #). */
  color: string;
  /** Optional shorter display label. */
  short?: string;
};

const items: Software[] = [
  { name: "Autodesk Revit", slug: "autodesk", color: "0696D7" },
  { name: "Autodesk AutoCAD", slug: "autodesk", color: "E51050" },
  { name: "Autodesk Navisworks", slug: "autodesk", color: "F58220" },
  { name: "Autodesk Construction Cloud", slug: "autodesk", color: "0696D7", short: "ACC" },
  { name: "BIM 360", slug: "autodesk", color: "0696D7" },
  { name: "Autodesk Docs", slug: "autodesk", color: "0696D7" },
  { name: "Civil 3D", slug: "autodesk", color: "6EBE44" },
  { name: "Dynamo", slug: "autodesk", color: "3E8EDE" },
  { name: "Rhino", slug: "rhinoceros", color: "801010" },
  { name: "SketchUp", slug: "sketchup", color: "005F9E" },
  { name: "Enscape", color: "F27021" },
  { name: "Twinmotion", slug: "unrealengine", color: "0E1128" },
  { name: "Lumion", color: "3B7DDD" },
  { name: "Solibri", color: "F47920" },
  { name: "Revizto", color: "1F3864" },
  { name: "Bentley", color: "009639" },
  { name: "Tekla", slug: "trimble", color: "0033A0" },
  { name: "Primavera", color: "C74634" },
  { name: "Microsoft Project", color: "217346" },
];

function initials(name: string) {
  return name
    .replace(/[^A-Za-z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function SoftwareGrid() {
  return (
    <ul
      role="list"
      className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
    >
      {items.map((s) => (
        <li key={s.name}>
          <div
            className="group relative flex h-full min-h-[110px] flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-border bg-card p-5 text-center shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-royal/40 hover:shadow-[var(--shadow-elevated)]"
            title={s.name}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-[3px] scale-x-0 transform bg-gradient-to-r from-royal via-sky to-royal transition-transform duration-500 group-hover:scale-x-100"
            />

            {s.slug ? (
              <img
                src={`https://cdn.simpleicons.org/${s.slug}/${s.color}`}
                alt={`${s.name} logo`}
                loading="lazy"
                width={36}
                height={36}
                className="h-9 w-9 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <span
                aria-hidden
                className="grid h-9 w-9 place-items-center rounded-lg text-[13px] font-bold tracking-tight text-white shadow-sm transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: `#${s.color}` }}
              >
                {initials(s.name)}
              </span>
            )}

            <span className="text-xs font-medium leading-tight text-navy sm:text-sm">
              {s.short ?? s.name}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
