import malik from "@/assets/malik.webp.asset.json";
import avinash from "@/assets/avinash.webp.asset.json";
import yash from "@/assets/yash.webp.asset.json";
import sahil from "@/assets/sahil.webp.asset.json";

export type Member = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

export const team: Member[] = [
  {
    name: "Er. Malik Jan",
    role: "Co-Founder & CEO",
    bio: "As Co-Founder and Chief Executive Officer, he drives design innovation, project excellence, and client success. He oversees engineering strategy, multidisciplinary collaboration, and the delivery of high-quality digital engineering solutions for complex projects worldwide.",
    photo: malik.url,
  },
  {
    name: "Ar. Avinash Marate",
    role: "Co-Founder & CEO",
    bio: "As Co-Founder and Chief Executive Officer, he leads Infinity BIM's strategic vision, business growth, and global partnerships. He is committed to delivering innovative BIM, digital engineering, and automation solutions while building lasting client relationships and driving operational excellence.",
    photo: avinash.url,
  },
  {
    name: "Ar. Yash Zanwar",
    role: "Chief Financial Officer (CFO)",
    bio: "The Chief Financial Officer oversees financial strategy, business planning, and sustainable growth. By maintaining strong financial governance and operational efficiency, he supports long-term success while delivering value to clients and stakeholders",
    photo: yash.url,
  },
  {
    name: "Er. Sahil Ahmed",
    role: "Chief Technology Officer (CTO)",
    bio: "The Chief Technology Officer leads our technology vision by advancing BIM innovation, automation, and digital engineering workflows. He drives the adoption of emerging technologies, ensuring scalable, efficient, and future-ready solutions across every project.",
    photo: sahil.url,
  },
];
