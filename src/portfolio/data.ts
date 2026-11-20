
export type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "ProShop",
    subtitle: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart management, and secure checkout.",
    image: "/__l5e/assets-v1/260e4404-19d3-4967-b22d-2ccf2541ffde/social.png",
    technologies: ["React.js", "MongoDB", "Node.js", "Express.js", "CSS"],
    githubUrl: "https://github.com/ezadin2/proshop-demo",
  },
  {
    id: 2,
    title: "ሀሴት Delivery",
    subtitle: "Delivery Management Platform",
    description:
      "An Ethiopian delivery platform with customer booking, real-time tracking, admin analytics, and a driver operations interface.",
    image: "/__l5e/assets-v1/b926f406-f5ea-48b8-9d6d-1a6b8abce455/quran.png",
    technologies: ["React.js", "TypeScript", "Node.js", "Tailwind CSS", "Express.js"],
    liveUrl: "https://hasset-delivery-front-end-side.onrender.com/",
    githubUrl: "https://github.com/ezadin2/Hasset_Delivery_Front-End_Side",
  },
  {
    id: 3,
    title: "Dina Mart",
    subtitle: "Complete E-commerce System",
    description:
      "A secure cross-platform shopping experience with verified Firebase authentication, product browsing, cart management, orders, and user accounts.",
    image: "/__l5e/assets-v1/a5c475ec-b728-463b-a3f7-b51e3f3901fd/notes.png",
    technologies: ["Flutter", "Firebase", "Node.js", "MongoDB"],
    liveUrl: "https://adminpanel-bx43q6fid-ezadin-badrus-projects.vercel.app/",
  },
  {
    id: 4,
    title: "Privacy Checker",
    subtitle: "Data Privacy Compliance",
    description:
      "A Streamlit tool built at INSA Summer Camp for PII scanning, anonymization, NLP entity detection, and automated compliance scoring.",
    image: "/__l5e/assets-v1/ab920439-5261-4dc6-a83c-c081260e986c/trello.png",
    technologies: ["Python", "Streamlit", "NLP", "Pandas"],
    githubUrl: "https://github.com/ezadin2",
  },
  {
    id: 5,
    title: "Audio Application",
    subtitle: "Cross-platform Audio Experience",
    description:
      "An audio-based mobile application showcasing sound features, modern UI, and responsive state management.",
    image: "/__l5e/assets-v1/39db1178-84a8-4d1d-82a4-c1ba0ee6e8a8/portfolio.png",
    technologies: ["Flutter", "Firebase", "Dart", "State Management"],
    githubUrl: "https://github.com/ezadin2/Audio-player",
  },
  {
    id: 6,
    title: "Chat Application",
    subtitle: "Real-time Messaging",
    description:
      "A real-time chat application with a modern interface, user messaging, and a responsive design.",
    image: "/__l5e/assets-v1/f628c4b9-5e1f-4ffc-8f13-d44d9cd821ff/chatApp.png",
    technologies: ["Next.js", "Node.js", "Socket.io", "Tailwind CSS"],
    liveUrl: "https://nextjs-setup-gilt.vercel.app/",
    githubUrl: "https://github.com/ezadin2/nextjs-setup",
  },
  {
    id: 7,
    title: "FaydaRent",
    subtitle: "Rental Marketplace",
    description:
      "A trust-first rental marketplace for Ethiopia where people find homes, vehicles and equipment from verified owners, with search by neighborhood, category and price.",
    image: "/__l5e/assets-v1/a598b8a3-30c9-4430-b0fc-e0fda7b6c60b/techxpert.png",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "https://techxpert-rental-market-place.vercel.app/",
  },
  {
    id: 8,
    title: "Al-Qur'an Al-Kareem",
    subtitle: "Quran Reading App",
    description:
      "A Quran study companion with all 114 surahs, translations, recitations, azkar and duas, prayer times, a Ramadan tracker, hadith and bookmarks.",
    image: "/__l5e/assets-v1/416740ab-a7d3-416f-840c-7d70fdad3355/my-quran-onrender.png",
    technologies: ["React.js", "Tailwind CSS", "REST API"],
    liveUrl: "https://my-quran.onrender.com/",
  },
  {
    id: 9,
    title: "QemerTech",
    subtitle: "Tech Education Platform",
    description:
      "An online learning platform offering industry-ready courses in web development, AI and mobile, with course listings, instructors and student sign-up.",
    image: "/__l5e/assets-v1/9389622c-eb9f-42f6-94d8-c1062be94c64/qemer.png",
    technologies: ["React.js", "Tailwind CSS", "Node.js"],
    liveUrl: "https://qemer-final-project.vercel.app/",
  },
  {
    id: 10,
    title: "Socialbook",
    subtitle: "Social Media Page",
    description:
      "A Facebook-style social page with stories, a post feed, events, friends sidebar and chat list.",
    image: "/__l5e/assets-v1/7acd8cb1-6a3f-46a8-9f8b-2fd6825b6e05/qemer-fb.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://ezadin2.github.io/qemer_tech_project_facebookpage/",
  },
];

export type Certificate = {
  id: number;
  title: string;
  image: string;
  link: string;
};

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Certificate of Appreciation",
    image: "/__l5e/assets-v1/5d220e40-f92f-447f-93ce-3333b275f02b/appr2.png",
    link: "/__l5e/assets-v1/5d220e40-f92f-447f-93ce-3333b275f02b/appr2.png",
  },
  {
    id: 2,
    title: "Academic Achievement",
    image: "/__l5e/assets-v1/ab557bd4-3b97-42ac-8d2c-884a3e6066f3/appre1.png",
    link: "/__l5e/assets-v1/ab557bd4-3b97-42ac-8d2c-884a3e6066f3/appre1.png",
  },
  {
    id: 3,
    title: "Professional Certificate",
    image: "/__l5e/assets-v1/6d7f4ebc-eb95-4231-8332-f1c2ce151600/tempo.png",
    link: "/__l5e/assets-v1/6d7f4ebc-eb95-4231-8332-f1c2ce151600/tempo.png",
  },
  {
    id: 4,
    title: "Huawei Certificate",
    image: "/__l5e/assets-v1/fd87cfb7-15ba-4a5c-8a7a-c1c64de52b93/huawe.png",
    link: "/__l5e/assets-v1/fd87cfb7-15ba-4a5c-8a7a-c1c64de52b93/huawe.png",
  },
  {
    id: 5,
    title: "Cisco Certificate",
    image: "/__l5e/assets-v1/500b8b20-604d-4a97-a3fb-48cfa62ef2f0/cisco.png",
    link: "/__l5e/assets-v1/500b8b20-604d-4a97-a3fb-48cfa62ef2f0/cisco.png",
  },
  {
    id: 6,
    title: "Development Certificate",
    image: "/__l5e/assets-v1/dce28129-f556-42ea-8750-1d112b982226/bago.png",
    link: "/__l5e/assets-v1/dce28129-f556-42ea-8750-1d112b982226/bago.png",
  },
  {
    id: 7,
    title: "Technical Certificate",
    image: "/__l5e/assets-v1/1fff88ac-9728-4893-8296-69ed4202772a/mosq2.png",
    link: "/__l5e/assets-v1/1fff88ac-9728-4893-8296-69ed4202772a/mosq2.png",
  },
  {
    id: 8,
    title: "Oracle Certificate",
    image: "/__l5e/assets-v1/5acfc1c3-7de2-487d-92d5-8aa29719d049/orac.png",
    link: "/__l5e/assets-v1/5acfc1c3-7de2-487d-92d5-8aa29719d049/orac.png",
  },
];

export const resumeUrl = "/__l5e/assets-v1/fc2bdb62-0a67-49df-bbde-c2bca490b373/Ezadin_Resume.pdf";
