import malik from "@/assets/malik_updated2.png";
import yash from "@/assets/new_yash.png";

export type Member = {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  journey: string;
  philosophy: string;
  vision: string;
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
    role: "Director | Infinity BIM",
    credentials:
      "Architect | BIM Certified Professional | Master's in Construction Project Management",
    bio: "Yash leads Infinity BIM's strategic growth, business development, and client relationships, while overseeing technical delivery, resource management, and financial planning to drive sustainable growth and long-term business value.",
    journey:
      "An architect by profession, Autodesk Certified BIM Professional, and postgraduate in Construction Project Management from MIT, Yash began his career at ARCOP Associates Private Limited, gaining exposure to traditional AEC workflows and projects associated with DLF and TATA Projects. Driven by an interest in emerging technologies, he transitioned into BIM, developing expertise in digital workflows, multidisciplinary coordination, and international project delivery. His experience includes projects such as SOUL (School of Ultimate Leadership) and Microsoft B3 Office Building, alongside professional exposure to Edifice Consultants, M Moser, and Shapoorji Pallonji. He subsequently expanded into BIM consulting, business development, and strategic leadership.",
    philosophy:
      "Yash believes in forward-thinking leadership, strategic clarity, and disciplined execution. His approach combines technical excellence, business strategy, and digital innovation, emphasizing collaboration, informed decision-making, and continuous evolution to turn challenges into opportunities.",
    vision:
      "To contribute to India's development by building an integrated AEC ecosystem that connects global expertise, innovation, and multidisciplinary capabilities to deliver comprehensive solutions across the built environment, fostering lasting partnerships and sustainable growth.",
    photo: yash,
    linkedin: "https://www.linkedin.com/in/yash-zanwar-5312b1199",
    compactObjectPosition: "center 20%",
    expandedObjectPosition: "center 18%",
    compactScale: 1.04,
    expandedScale: 1,
  },
  {
    name: "Malik",
    role: "Director | Infinity BIM",
    credentials: "Civil Engineer | BIM Certified Professional",
    bio: "Malik leads Infinity BIM's operational management, client coordination, business documentation, and administrative processes, ensuring efficient execution, structured workflows, and consistent organizational performance.",
    journey:
      "A Civil Engineer and BIM Certified Professional, Malik began his career in site engineering before developing expertise in structural analysis, design, and engineering solutions. Through independent project engagements, he built professional relationships and delivered projects for international clients, including through MJ Designs, which he founded. His experience spans residential and industrial developments, pharmaceutical facilities, and international projects, including Al Faiz Hospital in the Middle East and the British School in Muscat, Oman, through Carto-Tech. Driven by consistency, hard work, and a commitment to building lasting client trust, he expanded his independent work into a broader vision of multidisciplinary collaboration, joining hands with Yash to build Infinity BIM.",
    philosophy:
      "Malik believes in maintaining a positive, optimistic, and learning-oriented mindset. He values trust, consistency, and collective growth, recognizing that a strong business is built by bringing the right people together, nurturing their capabilities, and developing a team united by shared goals and accountability.",
    vision:
      "To contribute to India's development by strengthening BIM and VDC adoption across the AEC industry while advancing AI-driven automation and research. Through Infinity BIM, Malik aims to support digital transformation, build capable multidisciplinary teams, and develop innovative solutions that connect global expertise with Indian talent and create lasting industry value.",
    photo: malik,
    linkedin: "https://www.linkedin.com/in/malikjan01",
    compactObjectPosition: "center 0%",
    expandedObjectPosition: "center 10%",
    compactScale: 1.0,
    expandedScale: 1.02,
  },
];
