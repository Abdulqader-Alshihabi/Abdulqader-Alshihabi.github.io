import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  // Not in the thesvg registry — keep the existing custom logo.
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: brand("Firebase", "firebase-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  sanity: brand("Sanity", "sanity-mono.svg"),
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  hono: brand("Hono", "hono-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  // React Native reuses the React mark.
  reactNative: brand("React Native", "react-mono.svg"),
  betterAuth: brand("Better Auth", "better-auth-mono.svg"),
  // Not in the thesvg registry — keep the text marks.
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Zu</span>,
  },
  partykit: {
    title: "PartyKit",
    bg: "black",
    fg: "white",
    icon: <span className="text-base">🎈</span>,
  },
  hocuspocus: {
    title: "Hocuspocus",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Hp</span>,
  },
  // React Flow ships under the xyflow brand.
  reactFlow: brand("React Flow", "xyflow-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  // "Satori / sharp" — uses the sharp mark.
  satori: brand("Satori / sharp", "sharp-mono.svg"),
  turborepo: brand("Turborepo", "turborepo-mono.svg"),
  // Vercel AI SDK uses the Vercel mark.
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  electron: brand("Electron", "electron-mono.svg"),
  vite: brand("Vite", "vite-mono.svg"),
  astro: brand("Astro", "astro-mono.svg"),
  sqlite: brand("SQLite", "sqlite-mono.svg"),
  ffmpeg: brand("FFmpeg", "ffmpeg-mono.svg"),
  ollama: brand("Ollama", "ollama-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  nextIntl: {
    title: "next-intl",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">i18n</span>,
  },
  // Not in the thesvg registry — keep the text marks.
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Expo</span>,
  },
  django: { title: "Django", bg: "black", fg: "white", icon: <span className="text-xs font-bold">dj</span> },
  go: { title: "Go", bg: "black", fg: "white", icon: <span className="text-xs font-bold">Go</span> },
  java: { title: "Java", bg: "black", fg: "white", icon: <span className="text-xs font-bold">Java</span> },
  ai: { title: "AI / Vector Search", bg: "black", fg: "white", icon: <span className="text-xs font-bold">AI</span> },
  mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MCP</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "sitesight",
    category: "Computer Vision",
    title: "SiteSight — PPE Safety AI",
    src: "/me/projects/cris_showcase.png",
    screenshots: ["cris_showcase.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.ai],
    },
    github: "https://github.com/Abdulqader-Alshihabi/SiteSight-Safety-Vision",
    live: "https://abdulqader-alshihabi.github.io/SiteSight-Safety-Vision/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            SiteSight — Real-Time Edge PPE Computer Vision System.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Problem</TypographyH3>
          <p className="font-mono mb-2">High cloud GPU costs and latency for continuous construction workplace monitoring.</p>
          <TypographyH3 className="my-4 mt-8">Solution</TypographyH3>
          <p className="font-mono mb-2">In-browser edge inference with YOLO11 and ONNX Runtime WebAssembly, executing zero-cloud real-time safety logging.</p>
        </div>
      );
    },
  },
  {
    id: "faster-rcnn",
    category: "Deep Learning",
    title: "Faster R-CNN Detection",
    src: "/me/projects/cris_showcase.png",
    screenshots: ["cris_showcase.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.ai],
    },
    github: "https://github.com/Abdulqader-Alshihabi/Faster-RCNN-Object-Detection",
    live: "https://abdulqader-alshihabi.github.io/Faster-RCNN-Object-Detection/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Faster R-CNN Deep Object Detection Pipeline.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Architecture</TypographyH3>
          <p className="font-mono mb-2">Two-stage detection with ResNet-50 FPN backbone trained and evaluated across 20 object classes.</p>
          <TypographyH3 className="my-4 mt-8">Deployment</TypographyH3>
          <p className="font-mono mb-2">Multi-file ONNX weight chunking for client browsers and FastAPI inference microservice.</p>
        </div>
      );
    },
  },
  {
    id: "cris",
    category: "Graduation Project",
    title: "Graduation Project (CRIS)",
    src: "/me/projects/cris_showcase.png",
    screenshots: ["cris_showcase.png"],
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.postgres],
    },
    github: "https://github.com/Abdulqader-Alshihabi/Islamic-University-CRIS",
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Islamic University CRIS — Research Intelligence platform.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Problem</TypographyH3>
          <p className="font-mono mb-2">Fragmented research data and unindexed Scopus publications.</p>
          <TypographyH3 className="my-4 mt-8">Solution</TypographyH3>
          <p className="font-mono mb-2">Automated multi-source deduplication (Scopus &amp; OpenAlex reconciled by DOI) and quartile analytics in an executive cockpit.</p>
          <TypographyH3 className="my-4 mt-8">Note</TypographyH3>
          <p className="font-mono mb-2">AI-Generated UI Mockup (Proprietary Project).</p>
          <SlideShow images={["/me/projects/cris_showcase.png"]} />
        </div>
      );
    },
  },
  {
    id: "saaed",
    category: "Enterprise ERP",
    title: "Saaed HR & Payroll ERP",
    src: "/me/projects/saaed_erp.png",
    screenshots: ["saaed_erp.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.django, PROJECT_SKILLS.python, PROJECT_SKILLS.postgres],
    },
    github: "https://github.com/Abdulqader-Alshihabi/Sync-ERP-HR",
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Core HR &amp; Payroll module of an ERP system — built during my internship at Asaqefah.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">What I built</TypographyH3>
          <p className="font-mono mb-2">The core HR module with React.js and Django, including Saudi payroll (WPS).</p>
          <TypographyH3 className="my-4 mt-8">Automation</TypographyH3>
          <p className="font-mono mb-2">Automated cross-departmental HR-to-Finance workflows.</p>
          <TypographyH3 className="my-4 mt-8">Note</TypographyH3>
          <p className="font-mono mb-2">AI-Generated UI Mockup • Proprietary System (NDA).</p>
          <SlideShow images={["/me/projects/saaed_erp.png"]} />
        </div>
      );
    },
  },
  {
    id: "res-handler",
    category: "AI Search",
    title: "res-handler",
    src: "/me/projects/res_handler.jpg",
    screenshots: ["res_handler.jpg"],
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.go, PROJECT_SKILLS.ai],
    },
    github: "https://github.com/Abdulqader-Alshihabi/res-handler",
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Islamic University Research Commercialisation Engine.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Problem</TypographyH3>
          <p className="font-mono mb-2">Industry problems couldn&apos;t match academic research via keywords.</p>
          <TypographyH3 className="my-4 mt-8">Solution</TypographyH3>
          <p className="font-mono mb-2">AI semantic vector search matching industry problems to university research.</p>
          <SlideShow images={["/me/projects/res_handler.jpg"]} />
        </div>
      );
    },
  },
  {
    id: "shakkel-learn",
    category: "LMS",
    title: "Shakkel LMS Platform",
    src: "/me/projects/shakkel_learn.jpg",
    screenshots: ["shakkel_learn.jpg"],
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.supabase, PROJECT_SKILLS.postgres],
    },
    github: "#",
    live: "https://learn.shakkel.store/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Shakkel Learn — Corporate Workforce Training LMS.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Problem</TypographyH3>
          <p className="font-mono mb-2">Fragmented industrial training and lack of role access control.</p>
          <TypographyH3 className="my-4 mt-8">Solution</TypographyH3>
          <p className="font-mono mb-2">Multi-tenant RBAC, a Tiptap course builder and exam integrity.</p>
          <SlideShow images={["/me/projects/shakkel_learn.jpg"]} />
        </div>
      );
    },
  },
  {
    id: "shakkel-store",
    category: "E-Commerce",
    title: "Shakkel Industrial Store",
    src: "/me/projects/shakkel_store.png",
    screenshots: ["shakkel_store.png"],
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.supabase],
    },
    github: "#",
    live: "https://shakkel.store/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Shakkel Industrial &amp; Packaging E-Commerce.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Problem</TypographyH3>
          <p className="font-mono mb-2">Slow manual email/phone quotation cycles for bulk packaging.</p>
          <TypographyH3 className="my-4 mt-8">Solution</TypographyH3>
          <p className="font-mono mb-2">Dynamic automated RFQ quote calculation with 15% VAT and live sync.</p>
          <SlideShow images={["/me/projects/shakkel_store.png"]} />
        </div>
      );
    },
  },
  {
    id: "learnhub",
    category: "LMS",
    title: "LearnHub LMS Platform",
    src: "/me/projects/learning_hub.png",
    screenshots: ["learning_hub.png"],
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.supabase],
    },
    github: "https://github.com/Abdulqader-Alshihabi/LearningHub",
    live: "https://abdulqader-alshihabi.github.io/LearningHub/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            LearnHub — Modern Enterprise LMS Platform.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Problem</TypographyH3>
          <p className="font-mono mb-2">LMS demo failure during database standby / cold starts.</p>
          <TypographyH3 className="my-4 mt-8">Solution</TypographyH3>
          <p className="font-mono mb-2">A graceful offline seed-data fallback layer ensuring 100% uptime.</p>
          <SlideShow images={["/me/projects/learning_hub.png"]} />
        </div>
      );
    },
  },
  {
    id: "cinevault",
    category: "Web & Desktop",
    title: "CineVault Movies",
    src: "/me/projects/cinevault.png",
    screenshots: ["cinevault.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.python],
    },
    github: "https://github.com/Abdulqader-Alshihabi/Movie-Organizer-Desktop-App",
    live: "https://abdulqader-alshihabi.github.io/Movie-Organizer-Desktop-App/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            CineVault — Web &amp; Desktop Movie Management.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Problem</TypographyH3>
          <p className="font-mono mb-2">Sluggish UI jitter and unencrypted multi-user profiles.</p>
          <TypographyH3 className="my-4 mt-8">Solution</TypographyH3>
          <p className="font-mono mb-2">Responsive profiles, SHA-256 security and 60fps animations.</p>
          <SlideShow images={["/me/projects/cinevault.png"]} />
        </div>
      );
    },
  },
];
export default projects;
