"use client";

import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { ABOUT } from "@/data/constants";
import { cn } from "@/lib/utils";

/**
 * Sits between the hero and the keyboard skills. The 3D keyboard is still in
 * its hero pose on the right here, so the copy stays in the left column.
 */
const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="w-full min-h-screen flex items-center py-24">
      <div className="grid md:grid-cols-2 w-full">
        <div className="col-span-1 px-4 md:px-20 lg:px-24 xl:px-28">
          <SectionHeader
            id="about"
            title="About"
            className="static mb-8 [&_h2]:md:text-left [&_h2]:text-center"
          />
          <div
            className={cn(
              "rounded-xl border border-border/60 p-5 md:p-6",
              "bg-white/70 dark:bg-black/60 backdrop-blur-sm"
            )}
          >
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-muted-foreground">
              {ABOUT.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-border/60 pt-5">
              {ABOUT.stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-[11px] md:text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>

            <ul className="mt-5 space-y-3 border-t border-border/60 pt-5">
              {ABOUT.focus.map((group) => (
                <li key={group.title}>
                  <p className="text-sm font-semibold text-foreground">{group.title}</p>
                  <p className="font-mono text-xs text-muted-foreground">{group.items}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
