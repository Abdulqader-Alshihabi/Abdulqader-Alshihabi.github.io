// order = keycap layout, 6 per row
export enum SkillNames {
  HTML = "html",
  CSS = "css",
  JS = "js",
  TS = "ts",
  REACT = "react",
  PYTHON = "python",
  JAVA = "java",
  DJANGO = "django",
  GO = "go",
  POSTGRES = "postgres",
  SUPABASE = "supabase",
  PYTORCH = "pytorch",
  OPENCV = "opencv",
  AWS = "aws",
  GIT = "git",
  GITHUB = "github",
  POSTMAN = "postman",
  PANDAS = "pandas",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
  /** Optional local artwork for the 3D key; falls back to icon. */
  keyboardIcon?: string;
  /** Plastic color of the 3D keycap; independent of the HTML brand accent. */
  keyboardColor?: string;
  /** Browser KeyboardEvent.code, e.g. KeyJ. Defaults to the displayed key order. */
  shortcut?: string;
};

// Brand-colored icons for the HTML grid and badges; white ones for the 3D keys.
const SKILL_ICON = "/assets/skills";
const KEY_LOGO = "/assets/keyboard/logos";

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.HTML]: {
    id: 1,
    name: "html",
    label: "HTML",
    shortDescription: "Semantic, accessible markup.",
    color: "#e34c26",
    icon: `${SKILL_ICON}/html.svg`,
    keyboardIcon: `${KEY_LOGO}/html.svg`,
    keyboardColor: "#e34c26",
  },
  [SkillNames.CSS]: {
    id: 2,
    name: "css",
    label: "CSS",
    shortDescription: "Custom design systems, Flexbox, Grid and CSS variables.",
    color: "#264de4",
    icon: `${SKILL_ICON}/css.svg`,
    keyboardIcon: `${KEY_LOGO}/css.svg`,
    keyboardColor: "#264de4",
  },
  [SkillNames.JS]: {
    id: 3,
    name: "js",
    label: "JavaScript",
    shortDescription: "Interactive UIs and ERP front-ends.",
    color: "#f0db4f",
    icon: `${SKILL_ICON}/js.svg`,
    keyboardIcon: `${KEY_LOGO}/js.svg`,
    keyboardColor: "#ff9408",
  },
  [SkillNames.TS]: {
    id: 4,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Typed React apps: CRIS, Shakkel and LearnHub.",
    color: "#007acc",
    icon: `${SKILL_ICON}/ts.svg`,
    keyboardIcon: `${KEY_LOGO}/ts.svg`,
    keyboardColor: "#008fd5",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Front-end of the Saaed ERP, CRIS and LMS platforms.",
    color: "#61dafb",
    icon: `${SKILL_ICON}/react.svg`,
    keyboardIcon: `${KEY_LOGO}/react.svg`,
    keyboardColor: "#00cce8",
  },
  [SkillNames.PYTHON]: {
    id: 6,
    name: "python",
    label: "Python",
    shortDescription: "Backends, data science, ML and automation.",
    color: "#3776ab",
    icon: `${SKILL_ICON}/python.svg`,
    keyboardIcon: `${KEY_LOGO}/python.svg`,
    keyboardColor: "#2f6da5",
  },
  [SkillNames.JAVA]: {
    id: 7,
    name: "java",
    label: "Java",
    shortDescription: "Object-oriented programming and core CS coursework.",
    color: "#f89820",
    icon: `${SKILL_ICON}/java.svg`,
    keyboardIcon: `${KEY_LOGO}/java.svg`,
    keyboardColor: "#e76f00",
  },
  [SkillNames.DJANGO]: {
    id: 8,
    name: "django",
    label: "Django",
    shortDescription: "Backend of the Saaed HR and Payroll ERP module.",
    color: "#44b78b",
    icon: `${SKILL_ICON}/django.svg`,
    keyboardIcon: `${KEY_LOGO}/django.svg`,
    keyboardColor: "#0c4b33",
  },
  [SkillNames.GO]: {
    id: 9,
    name: "go",
    label: "Go",
    shortDescription: "Vector search core of res-handler.",
    color: "#00add8",
    icon: `${SKILL_ICON}/go.svg`,
    keyboardIcon: `${KEY_LOGO}/go.svg`,
    keyboardColor: "#00a4c8",
  },
  [SkillNames.POSTGRES]: {
    id: 10,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Relational data for ERP and research systems.",
    color: "#336791",
    icon: `${SKILL_ICON}/postgres.svg`,
    keyboardIcon: `${KEY_LOGO}/postgres.svg`,
    keyboardColor: "#336791",
  },
  [SkillNames.SUPABASE]: {
    id: 11,
    name: "supabase",
    label: "Supabase",
    shortDescription: "Postgres, auth and storage for web apps.",
    color: "#3ecf8e",
    icon: `${SKILL_ICON}/supabase.svg`,
    keyboardIcon: `${KEY_LOGO}/supabase.svg`,
    keyboardColor: "#1f9d68",
  },
  [SkillNames.PYTORCH]: {
    id: 12,
    name: "pytorch",
    label: "PyTorch",
    shortDescription: "Deep Learning and Computer Vision models.",
    color: "#ee4c2c",
    icon: `${SKILL_ICON}/pytorch.svg`,
    keyboardIcon: `${KEY_LOGO}/pytorch.svg`,
    keyboardColor: "#ee4c2c",
  },
  [SkillNames.OPENCV]: {
    id: 13,
    name: "opencv",
    label: "Computer Vision",
    shortDescription: "Advanced AI (Computer Vision), KAUST Academy and UPM.",
    color: "#8b7bf0",
    icon: `${SKILL_ICON}/opencv.svg`,
    keyboardIcon: `${KEY_LOGO}/opencv.svg`,
    keyboardColor: "#5c3ee8",
  },
  [SkillNames.AWS]: {
    id: 14,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud: Asaqefah SandBox Innovation Program with AWS.",
    color: "#ff9900",
    icon: `${SKILL_ICON}/aws.svg`,
    keyboardIcon: `${KEY_LOGO}/aws.svg`,
    keyboardColor: "#ff9408",
  },
  [SkillNames.GIT]: {
    id: 15,
    name: "git",
    label: "Git",
    shortDescription: "Version control for every project.",
    color: "#f05032",
    icon: `${SKILL_ICON}/git.svg`,
    keyboardIcon: `${KEY_LOGO}/git.svg`,
    keyboardColor: "#f05032",
  },
  [SkillNames.GITHUB]: {
    id: 16,
    name: "github",
    label: "GitHub",
    shortDescription: "github.com/Abdulqader-Alshihabi",
    color: "#ffffff",
    icon: `${SKILL_ICON}/github.svg`,
    keyboardIcon: `${KEY_LOGO}/github.svg`,
    keyboardColor: "#333537",
  },
  [SkillNames.POSTMAN]: {
    id: 17,
    name: "postman",
    label: "Postman",
    shortDescription: "API testing and workflows.",
    color: "#ff6c37",
    icon: `${SKILL_ICON}/postman.svg`,
    keyboardIcon: `${KEY_LOGO}/postman.svg`,
    keyboardColor: "#ff6c37",
  },
  [SkillNames.PANDAS]: {
    id: 18,
    name: "pandas",
    label: "Pandas",
    shortDescription: "Data analysis: Data Science in Python (U. Michigan).",
    color: "#8f7fe0",
    icon: `${SKILL_ICON}/pandas.svg`,
    keyboardIcon: `${KEY_LOGO}/pandas.svg`,
    keyboardColor: "#150458",
  },
};

export type Experience = {
  id: number;
  // multiple periods = returning stint, avoids a duplicate card
  periods: { start: string; end: string }[];
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    periods: [{ start: "Jul 2026", end: "Present" }],
    title: "Research & Innovation Consultant",
    company: "Islamic University of Madinah · Part-time · Madinah (Hybrid)",
    description: [
      "Institute of Research & Consulting Studies: leading technical development, operational execution, and project lifecycles.",
      "Steering technical architecture, development workflows, and research initiatives.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.REACT,
      SkillNames.TS,
      SkillNames.POSTGRES,
      SkillNames.GIT,
    ],
  },
  {
    id: 2,
    periods: [{ start: "Jun 2026", end: "Jul 2026" }],
    title: "Software Engineer Intern",
    company: "Asaqefah for Business Development · Internship · Madinah (On-site)",
    description: [
      "Full-Stack Development: built the core HR module in an ERP system with React and Django.",
      "Automated HR-to-Finance integrations and cross-departmental business workflows.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.DJANGO,
      SkillNames.PYTHON,
      SkillNames.JS,
      SkillNames.POSTGRES,
    ],
  },
  {
    id: 3,
    periods: [{ start: "2022", end: "2027 (Expected: Jan 2027)" }],
    title: "Bachelor of Science in Computer Science",
    company: "Islamic University of Madinah · Madinah (Undergraduate) · GPA: 4.62 / 5.00",
    description: [
      "Rigorous study in software engineering, database systems, algorithms, distributed architecture, and machine learning (Cumulative GPA: 4.62 / 5.00).",
      "Relevant coursework: Data Structures & Algorithms, Database Systems, Software Engineering, Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, Operating Systems, Computer Networks.",
    ],
    skills: [
      SkillNames.JAVA,
      SkillNames.PYTHON,
      SkillNames.POSTGRES,
      SkillNames.PYTORCH,
      SkillNames.OPENCV,
    ],
  },
];

export const ABOUT = {
  paragraphs: [
    "Hello! My name is Abdulqader Alshihabi, a Computer Science student (GPA: 4.62 / 5.00) graduating in January 2027 from the Islamic University of Madinah, passionate about engineering scalable backend systems, enterprise software, and artificial intelligence solutions.",
    "Currently serving as a Research & Innovation Consultant (Part-time) at the Institute of Research and Consulting Studies, steering technical architecture, development workflows, and research initiatives.",
    "Previously completed an intensive Software Engineering Internship at Asaqefah for Business Development, engineering core ERP modules with React.js and Django with automated cross-departmental business workflows.",
    "Holding 16 verified professional credentials across Computer Vision, Deep Learning, and Cloud Systems from prestigious institutions including KAUST Academy, DeepLearning.AI, IBM, and AWS.",
  ],
  stats: [
    { value: "4.62", label: "Cumulative GPA / 5.00" },
    { value: "5", label: "Programming Languages" },
    { value: "10+", label: "Frameworks & Dev Tools" },
    { value: "16", label: "Verified Credentials" },
  ],
  focus: [
    {
      title: "Full-Stack & Software Engineering",
      items: "React.js · Django · JavaScript · Python · Java",
    },
    {
      title: "AI, Data & Cloud Systems",
      items: "Computer Vision · PyTorch · PostgreSQL · Supabase · AWS",
    },
  ],
};

export const CONTACT = {
  email: "abdulqader.moh.2003@gmail.com",
  phone: "+966 58 273 3968",
  phoneHref: "tel:+966582733968",
  whatsapp: "https://wa.me/966582733968",
  linkedin: "https://www.linkedin.com/in/abdulqader-alshihabi-859b19260",
  github: "https://github.com/Abdulqader-Alshihabi",
};

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
