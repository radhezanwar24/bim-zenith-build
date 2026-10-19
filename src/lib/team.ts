import malik from "@/assets/malik_updated2.png";
import yash from "@/assets/new_yash.png";

export type Member = {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  photo: string;
  linkedin: string;
  compactObjectPosition?: string;
  expandedObjectPosition?: string;
  compactScale?: number;
  expandedScale?: number;
};

export const team: Member[] = [
  {
    name: "Yash Zanwar",
    role: "Director",
    credentials:
      "Architect | BIM Certified Professional | Master's in Construction Project Management",
    bio: "Yash leads Infinity BIM’s strategic growth, business development, and client relationships, while overseeing technical delivery, resource management, and financial planning to drive sustainable growth and long-term business value.",
    photo: yash,
    linkedin: "https://www.linkedin.com/in/yash-zanwar-5312b1199",
    compactObjectPosition: "center 20%",
    expandedObjectPosition: "center 18%",
    compactScale: 1.04,
    expandedScale: 1,
  },
  {
    name: "Malik",
    role: "Director",
    credentials: "Civil Engineer | BIM Certified Professional",
    bio: "Malik leads Infinity BIM’s operational management, client coordination, business documentation, and administrative processes, ensuring efficient execution, structured workflows, and consistent organizational performance.",
    photo: malik,
    linkedin: "https://www.linkedin.com/in/malikjan01",
    compactObjectPosition: "center 0%",
    expandedObjectPosition: "center 10%",
    compactScale: 1.00,
    expandedScale: 1.02,
  },
];

