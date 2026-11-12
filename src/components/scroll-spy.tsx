"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SECTIONS = [
  "hero",
  "about",
  "skills",
  "experience",
  "projects",
  "certificates",
  "contact",
];

export default function ScrollSpy() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    let currentSection = "";

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const id = SECTIONS[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            if (currentSection !== id) {
              currentSection = id;
              window.history.replaceState(null, "", `/#${id}`);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return null;
}
