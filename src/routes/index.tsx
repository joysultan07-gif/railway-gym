import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  Quote,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import heroImage from "@/assets/railway-hero.jpg";
import strengthImage from "@/assets/railway-strength.jpg";
import trainingImage from "@/assets/railway-training.jpg";
import communityImage from "@/assets/railway-community.jpg";
import detailImage from "@/assets/railway-detail.jpg";
import ctaImage from "@/assets/railway-cta.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Railway Gym | Richmond, BC" },
      {
        name: "description",
        content:
          "Railway Gym in Richmond, BC — a focused training environment built around strength, discipline and progress.",
      },
      { property: "og:title", content: "Railway Gym | Richmond, BC" },
      {
        property: "og:description",
        content: "A focused training environment built around strength, discipline and progress.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Membership", "membership"],
  ["Training", "training"],
  ["Coaches", "coaches"],
  ["Reels", "reels"],
  ["Testimonials", "testimonials"],
  ["Contact", "contact"],
] as const;

const features = [
  ["01", "Strength", "Build a stronger foundation through consistent training."],
  ["02", "Community", "Train alongside people who share your commitment."],
  ["03", "Progress", "Stay focused on measurable improvement."],
  ["04", "Experience", "A focused environment designed for serious training."],
] as const;

const memberships = [
  {
    name: "Essential",
    note: "For members who want reliable gym access and a focused training environment.",
    label: "Membership details to be added",
  },
  {
    name: "Premium",
    note: "For members looking for additional training support.",
    label: "Membership details to be added",
  },
  {
    name: "Railway",
    note: "For members who want the complete premium experience.",
    label: "Membership details to be added",
    featured: true,
  },
] as const;

const programs = [
  ["Strength Training", "Build a durable foundation through intentional resistance work.", strengthImage],
  ["Personal Training", "Focused one-to-one support shaped around your training direction.", detailImage],
  ["Functional Training", "Train coordinated strength for capable, confident movement.", trainingImage],
  ["Conditioning", "Develop the engine to keep moving when the work gets demanding.", communityImage],
  ["Weight Training", "Sharpen technique, control and progressive strength.", heroImage],
  ["Group Training", "Put in focused work alongside a committed training community.", communityImage],
] as const;

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="group inline-flex items-center gap-3" aria-label="Railway Gym home">
      <span className="relative flex h-7 w-7 items-center justify-center border border-primary">
        <span className="h-px w-4 bg-primary transition-transform duration-300 group-hover:translate-x-1" />
        <span className="absolute left-1 top-1 h-1 w-1 bg-primary" />
        <span className="absolute bottom-1 right-1 h-1 w-1 bg-primary" />
      </span>
      <span className={cn("font-display font-black uppercase leading-none", compact ? "text-xl" : "text-2xl")}>
        Railway <span className="text-primary">Gym</span>
      </span>
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-7 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
      <span className="h-px w-10 bg-primary" />
      {children}
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        scrolled
          ? "border-border bg-background/95 py-3 shadow-2xl backdrop-blur-xl"
          : "border-foreground/10 bg-background/20 py-5 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <BrandMark compact={scrolled} />
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-[11px] font-semibold uppercase tracking-[0.12em] text-quiet transition-colors hover:text-primary"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="railway" size="railway" className="hidden h-11 px-5 lg:inline-flex">
            <a href="#membership">Join the gym <ArrowRight /></a>
          </Button>
          <Button
            variant="railwayOutline"
            size="icon"
            className="xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="absolute inset-x-0 top-full border-b border-border bg-background px-5 py-6 xl:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-[1440px] gap-1">
            {navItems.map(([label, id], index) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-border py-3 font-display text-2xl font-bold uppercase"
              >
                <span>{label}</span><span className="text-xs text-primary">0{index + 1}</span>
              </a>
            ))}
            <Button asChild variant="railway" size="railway" className="mt-4 w-full">
              <a href="#membership" onClick={() => setOpen(false)}>Join the gym <ArrowRight /></a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />

      <section id="home" className="relative flex min-h-[92svh] items-end overflow-hidden border-b border-border">
        <img
          src={heroImage}
          alt="Athlete training with a barbell in a dark strength gym"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="animate-hero-image absolute inset-0 h-full w-full object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/60 to-background/10" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/45" />
        <div className="rail-grid absolute inset-0 opacity-25" />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="max-w-5xl">
            <p className="animate-rise mb-6 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary [animation-delay:200ms]">
              <span className="h-px w-14 bg-primary" /> Richmond, British Columbia
            </p>
            <h1 className="animate-rise font-display text-[clamp(4.5rem,12vw,10.5rem)] font-black uppercase leading-[0.78] [animation-delay:350ms]">
              Train with<br /><span className="text-primary">purpose.</span>
            </h1>
            <div className="animate-line-run my-7 h-px max-w-3xl bg-linear-to-r from-primary via-primary to-transparent" />
            <div className="animate-rise flex flex-col gap-7 [animation-delay:650ms] md:flex-row md:items-center md:justify-between">
              <p className="max-w-md text-base leading-relaxed text-quiet sm:text-lg">
                Strength. Discipline. Progress.<br />Keep moving forward.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="railway" size="railway"><a href="#membership">Join the gym <ArrowRight /></a></Button>
                <Button asChild variant="railwayOutline" size="railway"><a href="#about">Explore Railway <ArrowDown /></a></Button>
              </div>
            </div>
          </div>
        </div>
        <a href="#about" aria-label="Scroll to about Railway Gym" className="animate-scroll-pulse absolute bottom-8 right-8 z-20 hidden text-primary lg:block">
          <ArrowDown className="h-7 w-7" />
        </a>
      </section>

      <section id="about" className="relative overflow-hidden border-b border-border py-24 sm:py-32 lg:py-40">
        <div className="rail-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[1.5fr_.7fr] lg:px-12">
          <div>
            <SectionLabel>Our standard</SectionLabel>
            <h2 className="max-w-5xl font-display text-[clamp(4.25rem,10vw,9rem)] font-black uppercase leading-[0.82]">
              More than<br />a <span className="text-primary">gym.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end border-l border-primary pl-7 sm:pl-10">
            <p className="text-xl leading-relaxed text-quiet sm:text-2xl">
              A place for people serious about showing up, training with intention and becoming stronger.
            </p>
            <p className="mt-6 text-sm leading-7 text-muted-foreground">
              Progress is built through discipline, consistency and a community that keeps moving forward.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32" aria-labelledby="why-heading">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div><SectionLabel>Why Railway</SectionLabel><h2 id="why-heading" className="font-display text-6xl font-black uppercase leading-none sm:text-8xl">Built to<br /><span className="text-primary">move.</span></h2></div>
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">Four principles. One direction. A training mindset grounded in purposeful work.</p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {features.map(([number, title, copy]) => (
              <article key={title} className="group grid gap-4 py-8 transition-colors duration-300 hover:bg-surface-raised sm:grid-cols-[80px_1fr_1fr_40px] sm:items-center sm:px-5">
                <span className="text-xs text-primary">{number}</span>
                <h3 className="font-display text-4xl font-bold uppercase transition-transform duration-300 group-hover:translate-x-2 sm:text-5xl">{title}</h3>
                <p className="max-w-md text-sm leading-6 text-muted-foreground">{copy}</p>
                <ArrowRight className="hidden text-primary transition-transform duration-300 group-hover:translate-x-2 sm:block" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="membership" className="relative py-24 sm:py-32 lg:py-40">
        <div className="noise absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-14 max-w-3xl"><SectionLabel>Membership</SectionLabel><h2 className="font-display text-6xl font-black uppercase leading-[.88] sm:text-8xl">Choose your<br /><span className="text-primary">commitment.</span></h2></div>
          <div className="grid border border-border lg:grid-cols-3">
            {memberships.map((item, index) => (
              <article key={item.name} className={cn("relative flex min-h-[430px] flex-col border-border p-7 sm:p-9", index < 2 && "border-b lg:border-b-0 lg:border-r", item.featured && "bg-primary text-primary-foreground")}>
                <div className="flex items-center justify-between">
                  <span className={cn("text-xs font-semibold uppercase tracking-[0.18em]", item.featured ? "text-primary-foreground/70" : "text-primary")}>0{index + 1}</span>
                  {item.featured && <span className="border border-primary-foreground/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[.16em]">Signature</span>}
                </div>
                <h3 className="mt-16 font-display text-5xl font-black uppercase sm:text-6xl">{item.name}</h3>
                <p className={cn("mt-5 max-w-sm text-sm leading-7", item.featured ? "text-primary-foreground/80" : "text-muted-foreground")}>{item.note}</p>
                <div className={cn("mt-auto border-t pt-5 text-[11px] uppercase tracking-[.14em]", item.featured ? "border-primary-foreground/30" : "border-border text-steel")}>{item.label}</div>
                <Button asChild variant={item.featured ? "railwayOutline" : "railway"} size="railway" className={cn("mt-5 w-full", item.featured && "border-primary-foreground/60 text-primary-foreground hover:border-primary-foreground hover:text-primary-foreground")}>
                  <a href="#contact">Choose your membership <ChevronRight /></a>
                </Button>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs text-muted-foreground">Membership names and details are editable placeholders. Contact Railway Gym for current options.</p>
        </div>
      </section>

      <section id="training" className="bg-foreground py-24 text-background sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div><div className="mb-7 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[.2em] text-primary"><span className="h-px w-10 bg-primary" />Training directions</div><h2 className="font-display text-6xl font-black uppercase leading-[.88] sm:text-8xl">The work<br />starts here.</h2></div>
            <p className="max-w-md text-sm leading-7 text-background/65">Explore potential training categories. Final offerings and details can be updated by Railway Gym.</p>
          </div>
          <div className="grid gap-px bg-background/20 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map(([title, copy, image], index) => (
              <article key={title} className={cn("group relative min-h-[410px] overflow-hidden bg-background", index === 0 && "sm:col-span-2 lg:col-span-1")}>
                <img src={image} alt="Serious strength training atmosphere" width={index === 0 ? 1280 : 1600} height={index === 0 ? 1600 : 1200} loading="lazy" className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-foreground sm:p-8">
                  <span className="mb-3 block text-[10px] uppercase tracking-[.2em] text-primary">Editable category · 0{index + 1}</span>
                  <h3 className="font-display text-4xl font-black uppercase">{title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-quiet opacity-0 transition-opacity duration-300 group-hover:opacity-100">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="coaches" className="overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionLabel>The people behind the work</SectionLabel>
          <div className="mb-14 flex items-end justify-between"><h2 className="font-display text-6xl font-black uppercase leading-[.88] sm:text-8xl">Meet the<br /><span className="text-primary">coaches.</span></h2><span className="hidden text-xs uppercase tracking-[.18em] text-muted-foreground md:block">Profiles to be updated</span></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[strengthImage, trainingImage, detailImage, communityImage].map((image, index) => (
              <article key={index} className={cn("group", index % 2 === 1 && "lg:mt-20")}>
                <div className="relative aspect-[3/4] overflow-hidden bg-surface">
                  <img src={image} alt="Coach profile placeholder" width={index === 0 ? 1280 : 1600} height={index === 0 ? 1600 : 1200} loading="lazy" className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
                  <span className="absolute left-5 top-5 border border-foreground/35 px-2 py-1 text-[9px] uppercase tracking-[.16em]">Profile placeholder</span>
                </div>
                <h3 className="mt-5 font-display text-3xl font-bold uppercase">Coach Name</h3>
                <p className="text-xs uppercase tracking-[.15em] text-primary">Specialty / Role</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">Short coach bio to be added.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border bg-surface py-24 sm:py-32 lg:py-40" aria-labelledby="experience-heading">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
          <div className="relative lg:col-span-7">
            <img src={communityImage} alt="Athletes focused on strength training together" width={1600} height={1200} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <img src={detailImage} alt="Close detail of barbell and chalked hands" width={1600} height={1200} loading="lazy" className="-mt-20 ml-auto aspect-[4/3] w-1/2 border-8 border-surface object-cover sm:-mt-28" />
          </div>
          <div className="flex flex-col justify-center lg:col-span-5 lg:pl-10">
            <SectionLabel>The Railway experience</SectionLabel>
            <h2 id="experience-heading" className="font-display text-5xl font-black uppercase leading-[.9] sm:text-7xl">Built for people who keep <span className="text-primary">moving.</span></h2>
            <p className="mt-8 max-w-lg text-base leading-8 text-muted-foreground">Training is a practice. Consistency turns effort into progress, and shared purpose builds a stronger community.</p>
            <div className="mt-10 flex items-center gap-4 text-xs font-semibold uppercase tracking-[.15em]"><span className="h-px flex-1 bg-primary" />Strength / Discipline / Progress</div>
          </div>
        </div>
      </section>

      <section id="reels" className="py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-14 grid gap-8 lg:grid-cols-2">
            <div><SectionLabel>Watch the work</SectionLabel><h2 className="font-display text-6xl font-black uppercase leading-[.88] sm:text-8xl">Railway<br /><span className="text-primary">reels.</span></h2></div>
            <p className="max-w-md self-end text-sm leading-7 text-muted-foreground">Three vertical video spaces, ready for Railway Gym’s real training footage.</p>
          </div>
          <div className="grid items-start gap-5 sm:grid-cols-3">
            {["01", "02", "03"].map((number, index) => (
              <div key={number} className={cn("group", index === 1 && "sm:mt-20")}>
                <div className="relative aspect-[9/16] overflow-hidden border border-border bg-surface-raised">
                  <div className="rail-grid absolute inset-0 opacity-40" />
                  <div className="noise absolute inset-0 opacity-25" />
                  <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-primary/15" />
                  <span className="absolute left-5 top-5 text-xs font-semibold text-primary">{number} / 03</span>
                  <Button variant="railwayOutline" size="icon" aria-label={`Play reel placeholder ${number}`} className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 border-foreground/40 transition-transform duration-300 group-hover:scale-110">
                    <Play className="fill-current" />
                  </Button>
                  <div className="absolute inset-x-5 bottom-5 border-t border-border pt-4">
                    <p className="text-[10px] uppercase tracking-[.18em] text-muted-foreground">Video placeholder</p>
                    <p className="mt-1 font-display text-xl font-bold uppercase">Add vertical reel</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-foreground py-24 text-background sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-14"><div className="mb-7 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[.2em] text-primary"><span className="h-px w-10 bg-primary" />Member stories</div><h2 className="font-display text-6xl font-black uppercase leading-[.88] sm:text-8xl">The Railway<br />community.</h2></div>
          <div className="grid border border-background/20 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <article key={item} className="min-h-[290px] border-b border-background/20 p-7 last:border-b-0 md:border-r lg:p-9">
                <Quote className="h-7 w-7 text-primary" />
                <blockquote className="mt-8 font-display text-2xl font-semibold uppercase leading-tight">“Add a verified Railway Gym member story here.”</blockquote>
                <div className="mt-10 border-t border-background/20 pt-4"><p className="text-xs font-semibold uppercase tracking-[.14em]">Member name</p><p className="mt-1 text-[10px] uppercase tracking-[.14em] text-background/55">Member / training type</p></div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs text-background/55">All testimonial content shown is clearly marked placeholder copy, ready to be replaced with verified reviews.</p>
        </div>
      </section>

      <section className="relative flex min-h-[72svh] items-center overflow-hidden py-24 text-center">
        <img src={ctaImage} alt="Athlete moving forward through a strength gym" width={1920} height={1008} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="rail-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
          <SectionLabel>Take the first step</SectionLabel>
          <h2 className="font-display text-[clamp(4rem,10vw,9rem)] font-black uppercase leading-[.82]">Start your<br /><span className="text-primary">next chapter.</span></h2>
          <p className="mx-auto mt-8 max-w-lg text-base text-quiet sm:text-lg">Show up. Put in the work. Keep moving forward.</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="railway" size="railway"><a href="#membership">Join the gym <ArrowRight /></a></Button>
            <Button asChild variant="railwayOutline" size="railway"><a href="#contact">Contact Railway <Mail /></a></Button>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border py-24 sm:py-32 lg:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <SectionLabel>Richmond, BC</SectionLabel>
            <h2 className="font-display text-6xl font-black uppercase leading-[.88] sm:text-8xl">Find your<br /><span className="text-primary">direction.</span></h2>
            <div className="mt-12 divide-y divide-border border-y border-border">
              <div className="grid grid-cols-[32px_1fr] gap-4 py-5"><MapPin className="text-primary" /><address className="not-italic leading-7 text-quiet">Railway Gym<br />8188 Railway Ave<br />Richmond, BC, Canada<br />V7C 3K2</address></div>
              <div className="grid grid-cols-[32px_1fr] gap-4 py-5"><Phone className="text-primary" /><a href="tel:+16048088350" className="text-quiet transition-colors hover:text-primary">+1 604-808-8350</a></div>
              <div className="grid grid-cols-[32px_1fr] gap-4 py-5"><Mail className="text-primary" /><a href="mailto:elena.pereyaslavsky@gmail.com" className="break-all text-quiet transition-colors hover:text-primary">elena.pereyaslavsky@gmail.com</a></div>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="railway" size="railway"><a href="tel:+16048088350">Call now <Phone /></a></Button>
              <Button asChild variant="railwayOutline" size="railway"><a href="mailto:elena.pereyaslavsky@gmail.com">Email us <Mail /></a></Button>
              <Button asChild variant="railwayOutline" size="railway"><a href="https://www.google.com/maps/search/?api=1&query=8188+Railway+Ave+Richmond+BC+V7C+3K2" target="_blank" rel="noreferrer">Get directions <MapPin /></a></Button>
            </div>
          </div>
          <div className="relative min-h-[480px] overflow-hidden border border-border bg-surface">
            <div className="rail-grid absolute inset-0 opacity-50" />
            <div className="noise absolute inset-0 opacity-20" />
            <div className="absolute inset-x-8 top-1/2 h-px bg-border" />
            <div className="absolute inset-y-8 left-1/2 w-px bg-border" />
            <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-primary bg-background shadow-2xl"><MapPin className="h-8 w-8 text-primary" /></div>
            <div className="absolute inset-x-6 bottom-6 border border-border bg-background/90 p-5 backdrop-blur sm:inset-x-8 sm:bottom-8">
              <p className="text-[10px] uppercase tracking-[.2em] text-primary">Location</p><p className="mt-1 font-display text-2xl font-bold uppercase">8188 Railway Ave</p><p className="text-sm text-muted-foreground">Richmond, BC · V7C 3K2</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-surface py-14">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 border-b border-border pb-10 md:grid-cols-[1.2fr_1fr_1fr]">
            <div><BrandMark /><p className="mt-5 text-sm text-muted-foreground">Strength. Discipline. Keep Moving.</p></div>
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-3 text-xs uppercase tracking-[.12em]">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} className="text-muted-foreground transition-colors hover:text-primary">{label}</a>)}</nav>
            <address className="not-italic text-sm leading-7 text-muted-foreground"><a href="tel:+16048088350" className="hover:text-primary">+1 604-808-8350</a><br /><a href="mailto:elena.pereyaslavsky@gmail.com" className="break-all hover:text-primary">elena.pereyaslavsky@gmail.com</a><br />8188 Railway Ave, Richmond, BC<br /><span className="text-xs uppercase tracking-[.12em] text-steel">Facebook link to be added</span></address>
          </div>
          <div className="flex flex-col gap-3 pt-6 text-[10px] uppercase tracking-[.16em] text-steel sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} Railway Gym</span><span>Richmond, British Columbia</span></div>
        </div>
      </footer>

      <Button asChild variant="railway" size="railway" className="fixed bottom-4 left-4 right-4 z-40 shadow-2xl lg:hidden">
        <a href="#membership">Join the gym <ArrowRight /></a>
      </Button>
    </main>
  );
}