export type CertificateCategory = "ai" | "software" | "cloud";

export type Certificate = {
  id: number;
  title: string;
  issuer: string;
  category: CertificateCategory;
  categoryLabel: string;
  year: string;
  credId: string;
  /** PDF served from /public/me/certificates */
  pdf: string;
  /** Online verification link, when the issuer provides one. */
  verifyUrl?: string;
};

const PDF = "/me/certificates";

export const CERTIFICATE_FILTERS: { id: "all" | CertificateCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI & Machine Learning" },
  { id: "software", label: "Python & Data Science" },
  { id: "cloud", label: "Cloud & Innovation" },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: "Advanced Artificial Intelligence (Computer Vision)",
    issuer: "KAUST Academy & UPM",
    category: "ai",
    categoryLabel: "AI & Vision",
    year: "2026",
    credId: "KAUST-AI-UPM-2026",
    pdf: `${PDF}/kaust-advanced-ai-computer-vision.pdf`,
  },
  {
    id: 2,
    title: "Introduction to Artificial Intelligence (Distinction)",
    issuer: "KAUST Academy & UPM",
    category: "ai",
    categoryLabel: "AI & ML",
    year: "2026",
    credId: "KAUST-AI-DIST-2026",
    pdf: `${PDF}/kaust-intro-ai-distinction.pdf`,
  },
  {
    id: 3,
    title: "Introductory Artificial Intelligence Program",
    issuer: "KAUST Academy & NTDP",
    category: "ai",
    categoryLabel: "AI & ML",
    year: "2025",
    credId: "5d29344d-1aee-429b",
    pdf: `${PDF}/kaust-introductory-ai-program.pdf`,
  },
  {
    id: 4,
    title: "KAUST Academy AI Specialization Selection",
    issuer: "KAUST Academy & Islamic Univ.",
    category: "ai",
    categoryLabel: "AI & Academic",
    year: "2026",
    credId: "IU-KAUST-2195195835",
    pdf: `${PDF}/kaust-ai-specialization-selection.pdf`,
  },
  {
    id: 5,
    title: "Improving Deep Neural Networks",
    issuer: "DeepLearning.AI (Andrew Ng)",
    category: "ai",
    categoryLabel: "Deep Learning",
    year: "2024",
    credId: "AKKXRP44M1Q9",
    pdf: `${PDF}/improving-deep-neural-networks.pdf`,
    verifyUrl: "https://coursera.org/verify/AKKXRP44M1Q9",
  },
  {
    id: 6,
    title: "Calculus for Machine Learning & Data Science",
    issuer: "DeepLearning.AI",
    category: "ai",
    categoryLabel: "ML Mathematics",
    year: "2024",
    credId: "76B7WU00Q3AD",
    pdf: `${PDF}/calculus-for-ml-and-data-science.pdf`,
    verifyUrl: "https://coursera.org/verify/76B7WU00Q3AD",
  },
  {
    id: 7,
    title: "Linear Algebra for Machine Learning & Data Science",
    issuer: "DeepLearning.AI",
    category: "ai",
    categoryLabel: "ML Mathematics",
    year: "2024",
    credId: "R0I3WTWZKVBW",
    pdf: `${PDF}/linear-algebra-for-ml-and-data-science.pdf`,
    verifyUrl: "https://coursera.org/verify/R0I3WTWZKVBW",
  },
  {
    id: 8,
    title: "Probability & Statistics for Machine Learning",
    issuer: "DeepLearning.AI",
    category: "ai",
    categoryLabel: "ML Mathematics",
    year: "2024",
    credId: "INN9YZM9LWH2",
    pdf: `${PDF}/probability-and-statistics-for-ml.pdf`,
    verifyUrl: "https://coursera.org/verify/INN9YZM9LWH2",
  },
  {
    id: 9,
    title: "Exploratory Data Analysis for Machine Learning",
    issuer: "IBM",
    category: "software",
    categoryLabel: "Data Science",
    year: "2024",
    credId: "D5YUTS4LG04Q",
    pdf: `${PDF}/exploratory-data-analysis-for-ml.pdf`,
    verifyUrl: "https://coursera.org/verify/D5YUTS4LG04Q",
  },
  {
    id: 10,
    title: "Supervised Machine Learning: Regression",
    issuer: "IBM",
    category: "software",
    categoryLabel: "Machine Learning",
    year: "2024",
    credId: "KXYYHO2NZR59",
    pdf: `${PDF}/supervised-machine-learning-regression.pdf`,
    verifyUrl: "https://coursera.org/verify/KXYYHO2NZR59",
  },
  {
    id: 11,
    title: "Python Basics (Python 3 Programming)",
    issuer: "University of Michigan",
    category: "software",
    categoryLabel: "Python Core",
    year: "2024",
    credId: "BV5HW4PQZCN7",
    pdf: `${PDF}/python-basics.pdf`,
    verifyUrl: "https://coursera.org/verify/BV5HW4PQZCN7",
  },
  {
    id: 12,
    title: "Python Functions, Files, and Dictionaries",
    issuer: "University of Michigan",
    category: "software",
    categoryLabel: "Python Core",
    year: "2024",
    credId: "FBWFJNF9WK5C",
    pdf: `${PDF}/python-functions-files-dictionaries.pdf`,
    verifyUrl: "https://coursera.org/verify/FBWFJNF9WK5C",
  },
  {
    id: 13,
    title: "Python Classes and Inheritance",
    issuer: "University of Michigan",
    category: "software",
    categoryLabel: "Object-Oriented",
    year: "2024",
    credId: "WWFCEPF1P2QU",
    pdf: `${PDF}/python-classes-and-inheritance.pdf`,
    verifyUrl: "https://coursera.org/verify/WWFCEPF1P2QU",
  },
  {
    id: 14,
    title: "Data Collection and Processing with Python",
    issuer: "University of Michigan",
    category: "software",
    categoryLabel: "Data Engineering",
    year: "2024",
    credId: "YO7PLLONYNNF",
    pdf: `${PDF}/data-collection-and-processing-with-python.pdf`,
    verifyUrl: "https://coursera.org/verify/YO7PLLONYNNF",
  },
  {
    id: 15,
    title: "Introduction to Data Science in Python",
    issuer: "University of Michigan",
    category: "software",
    categoryLabel: "Data Science",
    year: "2024",
    credId: "7ZTT0DXOSF56",
    pdf: `${PDF}/introduction-to-data-science-in-python.pdf`,
    verifyUrl: "https://coursera.org/verify/7ZTT0DXOSF56",
  },
  {
    id: 16,
    title: "Asaqefah SandBox Innovation Program",
    issuer: "Asaqefah Business Dev. & AWS",
    category: "cloud",
    categoryLabel: "Cloud & Innovation",
    year: "2026",
    credId: "ASQ-2026-AE0323BD",
    pdf: `${PDF}/asaqefah-sandbox-innovation-program.pdf`,
  },
];
