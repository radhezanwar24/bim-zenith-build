import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Cpu,
  DraftingCompass,
  Factory,
  FileStack,
  Layers3,
  Network,
  ShieldCheck,
} from "lucide-react";

export type ServiceKey = "architectural-bim" | "structural-bim" | "mep-bim" | "data-center-bim";

export type ServiceSection = {
  title: string;
  items: string[];
};

export type Service = {
  key: ServiceKey;
  name: string;
  path: string;
  cardDescription: string;
  heading: string;
  description: string;
  introduction: string;
  icon: LucideIcon;
  sections: ServiceSection[];
};

export const services: Service[] = [
  {
    key: "architectural-bim",
    name: "Architectural BIM Services",
    path: "/services/architectural-bim",
    icon: DraftingCompass,
    heading: "Transforming Design into Intelligent Digital Models",
    cardDescription:
      "Accurate, coordinated architectural models that improve visualization, documentation, and project delivery.",
    description:
      "Delivering accurate, coordinated, and construction-ready Architectural BIM solutions from concept design through project completion. Our models enhance visualization, documentation, collaboration, and project efficiency while supporting international BIM standards and LOD 100-500 requirements.",
    introduction:
      "Infinity BIM supports architects, developers, and delivery teams with intelligent architectural models that carry design intent through documentation, coordination, construction, and handover.",
    sections: [
      {
        title: "What We Deliver",
        items: [
          "Architectural BIM Modeling",
          "LOD 100-500 Models",
          "Design Documentation",
          "Construction Documentation",
          "Interior BIM",
          "As-Built Models",
          "Scan to BIM",
          "Quantity Take-Off (QTO)",
        ],
      },
      {
        title: "Our Capabilities",
        items: [
          "Concept to Construction Modeling",
          "BIM Family Creation",
          "Model Validation",
          "Design Coordination",
          "Documentation Support",
          "BIM Standards Compliance",
        ],
      },
      {
        title: "Project Types",
        items: [
          "Residential",
          "Commercial",
          "Healthcare",
          "Industrial",
          "Educational",
          "Mixed-Use Developments",
        ],
      },
      {
        title: "Deliverables",
        items: [
          "Revit Models (.RVT)",
          "IFC Models",
          "PDF Drawings",
          "CAD Drawings",
          "Schedules",
          "BIM Documentation",
        ],
      },
      {
        title: "Software & Technology",
        items: [
          "Autodesk Revit",
          "AutoCAD",
          "Navisworks",
          "Autodesk Construction Cloud",
          "BIM 360",
        ],
      },
    ],
  },
  {
    key: "structural-bim",
    name: "Structural BIM Services",
    path: "/services/structural-bim",
    icon: Factory,
    heading: "Engineering Structural Precision with BIM",
    cardDescription:
      "Intelligent structural models for RCC, steel, rebar, fabrication, and construction-ready documentation.",
    description:
      "We develop intelligent structural BIM models for reinforced concrete, structural steel, and complex engineering projects, enabling accurate coordination, fabrication, and construction-ready documentation.",
    introduction:
      "Our structural BIM workflows give engineering and construction teams the coordinated information they need to reduce ambiguity, streamline detailing, and build with confidence.",
    sections: [
      {
        title: "What We Deliver",
        items: [
          "Structural BIM Modeling",
          "RCC Modeling",
          "Structural Steel Modeling",
          "Rebar Modeling",
          "Shop Drawings",
          "Fabrication Models",
          "Quantity Take-Off",
        ],
      },
      {
        title: "Our Capabilities",
        items: [
          "Reinforced Concrete Structures",
          "Structural Steel Structures",
          "Connection Modeling",
          "Reinforcement Detailing",
          "BIM Coordination",
        ],
      },
      {
        title: "Project Types",
        items: [
          "High-Rise Buildings",
          "Hospitals",
          "Industrial Facilities",
          "Commercial Buildings",
          "Data Centers",
        ],
      },
      {
        title: "Deliverables",
        items: [
          "Structural BIM Models",
          "Shop Drawings",
          "Rebar Drawings",
          "Fabrication Drawings",
          "IFC Files",
        ],
      },
      {
        title: "Software & Technology",
        items: ["Autodesk Revit", "Tekla Structures", "AutoCAD", "Navisworks"],
      },
    ],
  },
  {
    key: "mep-bim",
    name: "MEP BIM Services",
    path: "/services/mep-bim",
    icon: Network,
    heading: "Intelligent MEP Coordination for Complex Projects",
    cardDescription:
      "Coordinated mechanical, electrical, plumbing, and fire protection models for clash-free delivery.",
    description:
      "Delivering coordinated Mechanical, Electrical, and Plumbing BIM solutions that improve constructability, eliminate clashes, and support efficient installation through intelligent digital engineering.",
    introduction:
      "Infinity BIM helps project teams coordinate complex MEP systems before site execution, improving constructability and reducing costly field conflicts.",
    sections: [
      {
        title: "What We Deliver",
        items: [
          "HVAC BIM Modeling",
          "Plumbing BIM Modeling",
          "Electrical BIM Modeling",
          "Fire Protection Modeling",
          "BIM Coordination",
          "Clash Detection",
        ],
      },
      {
        title: "Our Capabilities",
        items: [
          "HVAC Systems",
          "Electrical Systems",
          "Plumbing Systems",
          "Fire Fighting Systems",
          "Coordination Reviews",
        ],
      },
      {
        title: "Project Types",
        items: ["Hospitals", "Commercial Towers", "Industrial Plants", "Hotels", "Data Centers"],
      },
      {
        title: "Deliverables",
        items: [
          "Coordinated BIM Models",
          "Shop Drawings",
          "Builder's Work Drawings",
          "Clash Reports",
          "IFC Models",
        ],
      },
      {
        title: "Software & Technology",
        items: ["Autodesk Revit MEP", "Navisworks", "AutoCAD", "BIM 360"],
      },
    ],
  },
  {
    key: "data-center-bim",
    name: "Data Center BIM Services",
    path: "/services/data-center-bim",
    icon: Cpu,
    heading: "BIM Solutions for Mission-Critical Infrastructure",
    cardDescription:
      "Specialized BIM coordination for hyperscale, enterprise, AI, HPC, and mission-critical facilities.",
    description:
      "Specialized BIM services for hyperscale and enterprise data centers, delivering intelligent coordination for mission-critical facilities with precision, reliability, and construction-ready documentation.",
    introduction:
      "Our data center BIM teams understand the precision, uptime sensitivity, and multidisciplinary coordination required for mission-critical environments.",
    sections: [
      {
        title: "What We Deliver",
        items: [
          "Data Center BIM Modeling",
          "MEP Coordination",
          "White Space Modeling",
          "Plant Room Modeling",
          "Construction Documentation",
          "Digital Twin Support",
        ],
      },
      {
        title: "Our Expertise",
        items: [
          "Hyperscale Data Centers",
          "Enterprise Data Centers",
          "Mission-Critical Facilities",
          "Cooling Infrastructure",
          "Electrical Infrastructure",
          "Cable Management",
        ],
      },
      {
        title: "Project Types",
        items: [
          "Hyperscale Data Centers",
          "Enterprise Data Centers",
          "Cloud Infrastructure",
          "AI & HPC Facilities",
          "Telecommunication Facilities",
        ],
      },
      {
        title: "Deliverables",
        items: [
          "BIM Models",
          "Coordination Models",
          "Shop Drawings",
          "Clash Reports",
          "Construction Documentation",
        ],
      },
      {
        title: "Software & Technology",
        items: ["Autodesk Revit", "Navisworks", "Autodesk Construction Cloud", "BIM 360"],
      },
    ],
  },
];

export const serviceHighlights = [
  { icon: Layers3, label: "LOD 100-500" },
  { icon: ShieldCheck, label: "QA/QC led delivery" },
  { icon: FileStack, label: "Construction-ready outputs" },
  { icon: Building2, label: "Global AEC standards" },
];

export function getService(key: ServiceKey) {
  return services.find((service) => service.key === key);
}
