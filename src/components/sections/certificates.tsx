"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck, FileText } from "lucide-react";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogTrigger,
} from "../ui/responsive-dialog";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import {
  CERTIFICATES,
  CERTIFICATE_FILTERS,
  type Certificate,
} from "@/data/certificates";
import { cn } from "@/lib/utils";

type FilterId = (typeof CERTIFICATE_FILTERS)[number]["id"];

const CertificatesSection = () => {
  const [filter, setFilter] = useState<FilterId>("all");
  const visible = useMemo(
    () => (filter === "all" ? CERTIFICATES : CERTIFICATES.filter((c) => c.category === filter)),
    [filter]
  );
  const count = (id: FilterId) =>
    id === "all" ? CERTIFICATES.length : CERTIFICATES.filter((c) => c.category === id).length;

  return (
    <SectionWrapper id="certificates" className="max-w-7xl mx-auto px-4 py-24">
      <SectionHeader
        id="certificates"
        title="Certificates"
        desc={`${CERTIFICATES.length} verified professional credentials & academic distinctions`}
        className="static mb-10"
      />

      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {CERTIFICATE_FILTERS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            aria-pressed={filter === item.id}
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs md:text-sm transition-colors",
              filter === item.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background/70 text-muted-foreground backdrop-blur-sm hover:text-foreground"
            )}
          >
            {item.label} ({count(item.id)})
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {visible.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const CertificateCard = ({ certificate }: { certificate: Certificate }) => {
  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger className="bg-transparent text-left w-full h-full">
        <div
          className={cn(
            "group flex h-full flex-col gap-3 rounded-lg p-4",
            "border border-border bg-white/85 dark:bg-black/85 backdrop-blur-md",
            "transition-colors duration-300 hover:border-primary/40"
          )}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="rounded-lg bg-primary px-2 text-xs text-primary-foreground">
              {certificate.categoryLabel}
            </span>
            <span className="font-mono text-xs text-muted-foreground">{certificate.year}</span>
          </div>
          <div className="text-base font-semibold leading-snug text-foreground">
            {certificate.title}
          </div>
          <div className="mt-auto space-y-1">
            <div className="text-sm text-muted-foreground">{certificate.issuer}</div>
            <div className="flex items-center justify-between gap-2">
              <span className="truncate font-mono text-[11px] text-muted-foreground/80">
                ID: {certificate.credId}
              </span>
              <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                <FileText className="size-3.5" />
                View
              </span>
            </div>
          </div>
        </div>
      </ResponsiveDialogTrigger>

      <ResponsiveDialogContent className="md:max-w-4xl md:h-[85vh] md:!flex md:flex-col md:overflow-hidden md:p-0 md:gap-0">
        <div className="shrink-0 border-b border-border bg-background/80 backdrop-blur-sm px-6 md:px-8 py-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <h4 className="font-display text-lg md:text-xl font-bold text-foreground tracking-tight">
                {certificate.title}
              </h4>
              <p className="text-xs text-muted-foreground">
                {certificate.issuer} • {certificate.credId}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-4 md:mr-8">
              {certificate.verifyUrl && (
                <Link
                  href={certificate.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-muted-foreground underline underline-offset-2 transition-colors hover:text-foreground"
                >
                  <BadgeCheck className="size-3.5" />
                  Verify Online
                </Link>
              )}
              <Link href={certificate.pdf} target="_blank" rel="noopener noreferrer">
                <span className="group flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80">
                  Open PDF
                  <ArrowUpRight className="size-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[60vh] flex-1 bg-muted/30">
          <iframe
            src={`${certificate.pdf}#view=FitH`}
            title={certificate.title}
            className="h-[60vh] w-full md:h-full"
          />
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
};

export default CertificatesSection;
