"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import styles from "./style.module.scss";
import { opacity, background } from "./anim";
import Nav from "./nav";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import GitHubLink from "./github-link";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <motion.header
      className={cn(
        styles.header,
        "transition-colors delay-100 duration-500 ease-in z-[1000]"
      )}
      style={{
        background: isActive ? "hsl(var(--background) / .8)" : "transparent",
      }}
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: loader ? 3.5 : 0,
        duration: 0.8,
      }}
    >
      <div className={styles.bar}>
        <div className={styles.brand}>
          <Link href="/#hero" className="flex items-center">
            <Button
              variant="link"
              className="text-base font-bold tracking-tight px-0 text-foreground hover:no-underline"
            >
              {config.author}
            </Button>
          </Link>
        </div>

        <div className={styles.actions}>
          <FunnyThemeToggle className="w-6 h-6 hidden md:flex" />
          <GitHubLink />
          <Button
            variant="ghost"
            onClick={() => setIsActive(!isActive)}
            aria-label={isActive ? "Close menu" : "Open menu"}
            aria-expanded={isActive}
            className={cn(
              styles.el,
              "m-0 px-2 h-8 bg-transparent flex items-center justify-center gap-2 hover:bg-secondary/60 rounded-lg"
            )}
          >
            <div className="relative hidden md:flex items-center">
              <motion.p
                variants={opacity}
                animate={!isActive ? "open" : "closed"}
              >
                Menu
              </motion.p>
              <motion.p
                variants={opacity}
                animate={isActive ? "open" : "closed"}
              >
                Close
              </motion.p>
            </div>
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </Button>
        </div>
      </div>

      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        onClick={() => setIsActive(false)}
        className={styles.background}
      ></motion.div>

      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
