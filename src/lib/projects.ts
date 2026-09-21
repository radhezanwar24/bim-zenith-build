import projectPrestige from "@/assets/project-alfaize-new.png";
import projectAlFaize from "@/assets/project-prestige-new.png";
import projectCorporateBlock from "@/assets/project-corporate-new.png";

export type Project = {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  image: string;
  services: string[];
  objectPosition?: string;
};

export const projects: Project[] = [
  {
    id: "prestige-serenity-shores",
    title: "Prestige Serenity Shores",
    location: "Bengaluru, India",
    category: "Residential Development",
    description:
      "Comprehensive multi-tower residential development delivering high-precision architectural and structural BIM modeling, multidisciplinary clash coordination, and construction-ready documentation.",
    image: projectPrestige,
    services: [
      "Architectural & Structural BIM",
      "Clash Detection & Coordination",
      "GFC & Shop Drawings",
    ],
    objectPosition: "center 35%",
  },
  {
    id: "al-faize-hospital-building",
    title: "Al-Faize Hospital Building",
    location: "Iraq",
    category: "Healthcare Development",
    description:
      "Advanced healthcare facility requiring complex multidisciplinary MEP BIM integration, specialized medical gas and HVAC coordination, and clinical workflow clash resolution.",
    image: projectAlFaize,
    services: [
      "Multi-Discipline MEP BIM",
      "Healthcare Code Compliance",
      "LOD 400 Coordination",
    ],
    objectPosition: "center 45%",
  },
  {
    id: "corporate-block-building",
    title: "Corporate Block Building",
    location: "Middle East",
    category: "Commercial Development",
    description:
      "Expansive multi-story commercial headquarters featuring high-volume architectural atrium modeling, interior fit-out coordination, and detailed constructability planning.",
    image: projectCorporateBlock,
    services: [
      "Commercial BIM Modeling",
      "Interior & Atrium Coordination",
      "BIM Quantity Take-Offs",
    ],
    objectPosition: "center 50%",
  },
];
