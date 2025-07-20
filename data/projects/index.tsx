import { IProject } from "./interface";

export const projects: IProject[] = [
  {
    name: "Laterly.ai",
    description:
      "A browser extension and dashboard that helps you save and organize articles with intent, get AI-powered summaries, smart search for saved articles and receive personalized reading digests — all seamlessly across browser and dashboard.",
    link: "https://github.com/SharadSaha/laterly.ai",
    skills: ["react", "redux", "nest", "postgres", "ai"],
  },
  {
    name: "FindMyNest",
    description:
      "A full-stack property search app with user auth, property listing/search, and automated emails, along with deployment on cloud platform",
    link: "https://github.com/SharadSaha/findmynest",
    skills: ["react", "redux", "express", "mongodb", "prisma"],
  },
  {
    name: "Video Moment Retrieval",
    description:
      "A web application that leverages deep learning technology to help users search for specific moments in videos by entering text queries. Built using Django, TensorFlow, and other powerful libraries, this app offers a seamless and efficient video retrieval experience.",
    link: "https://github.com/SharadSaha/video-moment-retrieval",
    skills: ["django", "tensorflow", "js", "html", "css"],
  },
  {
    name: "Adversarial attacks and graph regularization",
    description:
      "Demonstration of adversarial attack on trained deep learning models using deceptive data,and use of graph regularization to build models that are robust to such attacks.",
    link: "https://github.com/SharadSaha/gnn-adversarial-regularization",
    skills: ["tensorflow", "python", "jupyter"],
  },
];
