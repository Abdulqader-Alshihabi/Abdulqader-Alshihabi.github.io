const config = {
  title: "Abdulqader Alshihabi | Software & AI Engineer",
  description: {
    long: "Explore the portfolio of Abdulqader Alshihabi, a Computer Science graduate from the Islamic University of Madinah and Software & AI Engineer with expertise in Full-Stack architecture, ERP enterprise modules, and Deep Learning models. Discover CRIS, Saaed HR & Payroll ERP, res-handler, Shakkel LMS and more.",
    short:
      "Portfolio of Abdulqader Alshihabi — Computer Science Graduate and Software & AI Engineer.",
  },
  keywords: [
    "Abdulqader Alshihabi",
    "portfolio",
    "software engineer",
    "AI engineer",
    "Islamic University of Madinah",
    "React",
    "Django",
    "Python",
    "ERP",
    "Computer Vision",
    "PyTorch",
  ],
  author: "Abdulqader Alshihabi",
  email: "abdulqader.moh.2003@gmail.com",
  site: "https://abdulqader-alshihabi.github.io",

  // for github stars button
  githubUsername: "Abdulqader-Alshihabi",
  githubRepo: "Abdulqader-Alshihabi.github.io",

  get ogImg() {
    return this.site + "/assets/seo/og-image.jpg";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/abdulqader-alshihabi-859b19260",
    instagram: "",
    facebook: "",
    github: "https://github.com/Abdulqader-Alshihabi",
  },
};
export { config };
