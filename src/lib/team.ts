import malik from "@/assets/malik.jpg";
import avinash from "@/assets/avinash.jpg";
import yash from "@/assets/yash.jpg";
import sahil from "@/assets/sahil.jpg";

export type Member = {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  photo: string;
  linkedin: string;
};

export const team: Member[] = [
  {
    name: "Malik Jan",
    role: "Founder & Chief Executive Officer (CEO)",
    credentials: "Civil Engineer | BIM Certified Professional",
    bio: "As Founder & Chief Executive Officer, Malik Jan leads Infinity BIM's strategic vision, business growth, and global expansion. He drives innovation, strategic partnerships, and operational excellence while delivering integrated AEC, BIM, VDC, and digital engineering solutions with a commitment to quality and client success.",
    photo: malik,
    linkedin: "https://www.linkedin.com/in/malikjan01",
  },
  {
    name: "Avinash Marathe",
    role: "Co-Founder & Chief Executive Officer (CEO)",
    credentials: "Architect | BIM Certified Professional",
    bio: "As Co-Founder & Chief Executive Officer, Avinash drives business strategy, design excellence, and operational leadership at Infinity BIM. He fosters innovation, strengthens client relationships, and ensures the successful delivery of integrated AEC, BIM, VDC, and digital engineering solutions across global markets.",
    photo: avinash,
    linkedin: "https://www.linkedin.com/in/avinash-marathe-350ba41a0",
  },
  {
    name: "Yash Zanwar",
    role: "Chief Business Development Officer (CBDO)",
    credentials:
      "Architect | BIM Certified Professional | Master's in Construction Project Management",
    bio: "As Chief Business Development Officer, Yash leads global business development, strategic partnerships, and client engagement at Infinity BIM. He drives market expansion, identifies growth opportunities, and builds long-term relationships while delivering value-driven AEC, BIM, VDC, and digital engineering solutions.",
    photo: yash,
    linkedin: "https://www.linkedin.com/in/yash-zanwar-5312b1199",
  },
  {
    name: "Sahil Ahmed Khan",
    role: "Chief Technology Officer (CTO)",
    credentials: "Civil Engineer | BIM Certified Professional",
    bio: "As Chief Technology Officer, Sahil leads Infinity BIM's technology strategy, technical excellence, and digital innovation. He oversees BIM standards, VDC workflows, automation, and multidisciplinary project delivery, ensuring scalable, efficient, and future-ready engineering solutions across global projects.",
    photo: sahil,
    linkedin: "https://www.linkedin.com/in/sahil-ahmed-khan",
  },
];
