/**
 * Grayscale-to-color client logo row. Uses inline SVG wordmarks so we don't
 * depend on any external brand assets. Purely typographic — clean and premium.
 */

const clients = [
  { name: "Habitat Studio", tag: "Architects" },
  { name: "EMAAR", tag: "" },
  { name: "DLF", tag: "Building India" },
  { name: "Lesico", tag: "Group" },
  { name: "Cartotech", tag: "" },
  { name: "MJ Designs", tag: "" },
];

export function ClientLogosRow() {
  return (
    <ul
      role="list"
      className="mt-12 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-6"
    >
      {clients.map((c) => (
        <li key={c.name} className="flex items-center justify-center">
          <div
            className="group flex flex-col items-center justify-center text-center opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
            title={`${c.name} ${c.tag}`.trim()}
          >
            <span className="font-display text-xl font-bold tracking-tight text-navy transition-colors group-hover:text-royal sm:text-2xl">
              {c.name}
            </span>
            {c.tag && (
              <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {c.tag}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
