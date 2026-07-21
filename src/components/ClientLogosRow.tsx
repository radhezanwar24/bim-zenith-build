import logoHabitat from "@/assets/logo-habitat.webp";
import logoEmaar from "@/assets/logo-emaar.png";
import logoDlf from "@/assets/logo-dlf.png";
import logoLesico from "@/assets/logo-lesico.png";
import logoCartotech from "@/assets/logo-cartotech.webp";
import logoMjdesigns from "@/assets/logo-mjdesigns.webp";

const clients = [
  { name: "Habitat Studio Architects", logo: logoHabitat },
  { name: "EMAAR", logo: logoEmaar },
  { name: "DLF Building India", logo: logoDlf },
  { name: "Lesico Group", logo: logoLesico },
  { name: "Cartotech", logo: logoCartotech },
  { name: "MJ Designs", logo: logoMjdesigns },
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
            className="group flex items-center justify-center h-16 w-full opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
            title={c.name}
          >
            <img
              src={c.logo}
              alt={`${c.name} logo`}
              className="max-h-12 max-w-[140px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

