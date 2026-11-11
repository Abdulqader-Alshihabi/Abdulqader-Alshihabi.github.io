import { SiGithub } from "react-icons/si";
import { config } from "@/data/config";
import { cn } from "@/lib/utils";

/**
 * Plain link to the GitHub profile. It deliberately shows no live star
 * count: that would need a request to api.github.com.
 */
export default function GitHubLink({ className }: { className?: string }) {
  return (
    <a
      href={config.social.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub profile"
      className={cn(
        "flex h-8 items-center gap-2 rounded-lg border border-border px-3 text-sm",
        "text-foreground transition-colors hover:bg-secondary/60",
        className
      )}
    >
      <SiGithub size={16} />
      <span className="hidden sm:inline">GitHub</span>
    </a>
  );
}
