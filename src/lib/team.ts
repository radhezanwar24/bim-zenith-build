import malik from "@/assets/malik.webp";
import avinash from "@/assets/avinash.webp";
import yash from "@/assets/yash.webp";
import sahil from "@/assets/sahil.webp";

export type Member = {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  photo: string;
};

export const team: Member[] = [
  {
    name: "Malik Jan",
    role: "Founder & Chief Executive Officer (CEO)",
    credentials: "Civil Engineer | BIM Certified Professional",
    bio: "As Founder & Chief Executive Officer, Malik Jan leads Infinity BIM's strategic vision, business growth, and global expansion. He drives innovation, strategic partnerships, and operational excellence while delivering integrated AEC, BIM, VDC, and digital engineering solutions with a commitment to quality and client success.",
    photo: malik,
  },
  {
    name: "Avinash Marathe",
    role: "Co-Founder & Chief Executive Officer (CEO)",
    credentials: "Architect | BIM Certified Professional",
    bio: "As Co-Founder & Chief Executive Officer, Avinash drives business strategy, design excellence, and operational leadership at Infinity BIM. He fosters innovation, strengthens client relationships, and ensures the successful delivery of integrated AEC, BIM, VDC, and digital engineering solutions across global markets.",
    photo: avinash,
  },
  {
    name: "Yash Zanwar",
    role: "Chief Business Development Officer (CBDO)",
    credentials:
      "Architect | BIM Certified Professional | Master's in Construction Project Management",
    bio: "As Chief Business Development Officer, Yash leads global business development, strategic partnerships, and client engagement at Infinity BIM. He drives market expansion, identifies growth opportunities, and builds long-term relationships while delivering value-driven AEC, BIM, VDC, and digital engineering solutions.",
    photo: yash,
  },
  {
    name: "Sahil Ahmed",
    role: "Chief Technology Officer (CTO)",
    credentials: "Civil Engineer | BIM Certified Professional",
    bio: "As Chief Technology Officer, Sahil leads Infinity BIM's technology strategy, technical excellence, and digital innovation. He oversees BIM standards, VDC workflows, automation, and multidisciplinary project delivery, ensuring scalable, efficient, and future-ready engineering solutions across global projects.",
    photo: sahil,
  },
];
