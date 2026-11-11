"use client";
import React from "react";
import { Mail, Phone } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { CONTACT } from "@/data/constants";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { cn } from "@/lib/utils";

const CHANNELS = [
  {
    name: "LinkedIn",
    value: "abdulqader-alshihabi",
    href: CONTACT.linkedin,
    icon: <SiLinkedin size={28} />,
    external: true,
  },
  {
    name: "Phone",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
    icon: <Phone size={28} />,
    external: false,
  },
  {
    name: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: <Mail size={28} />,
    external: false,
  },
  {
    name: "GitHub",
    value: "Abdulqader-Alshihabi",
    href: CONTACT.github,
    icon: <SiGithub size={28} />,
    external: true,
  },
];

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto ">
      <SectionHeader id='contact' className="relative mb-14" title={
        <>
          LET&apos;S WORK <br />
          TOGETHER
        </>} />
      <div className="grid grid-cols-1 md:grid-cols-2 z-[9999] mx-4">
        <ul className="grid grid-cols-2 gap-4 mt-10 md:mt-20">
          {CHANNELS.map((channel) => (
            <li key={channel.name}>
              <a
                href={channel.href}
                aria-label={`${channel.name}: ${channel.value}`}
                {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={cn(
                  "group flex h-full flex-col items-center justify-center gap-3 rounded-xl p-6 text-center",
                  "border border-border bg-white/70 dark:bg-black/70 backdrop-blur-sm",
                  "transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary/50",
                  "cursor-can-hover"
                )}
              >
                <span className="text-foreground transition-transform duration-300 group-hover:scale-110">
                  {channel.icon}
                </span>
                <span className="text-base font-semibold text-foreground">{channel.name}</span>
                <span className="max-w-full break-all text-xs text-muted-foreground">
                  {channel.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
