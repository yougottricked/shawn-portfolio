import { ArrowUpRight, Download, Mail } from "lucide-react";
import { ShotSlider } from "@/components/ShotSlider";
import { SiteNav } from "@/components/SiteNav";
import { AQUASCAPING_RESULTS, AQUASCAPING_SHOTS, EDUCATION, EXPERIENCE, PROFILE, PROJECTS, SKILLS, type Project } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line bg-bg/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="#top" className="leading-tight">
            <span className="block text-[15px] font-semibold">{PROFILE.name}</span>
            <span className="block text-sm text-muted">{PROFILE.role}</span>
          </a>
          <SiteNav />
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        <section aria-labelledby="intro-heading" className="pt-14 pb-4 sm:pt-20">
          <h1 id="intro-heading" className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-[40px]">
            Software engineer in Kuala Lumpur, building web systems on relational databases.
          </h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
            I studied software engineering at APU, finishing a dual degree with De Montfort University in 2026, and
            I&apos;m looking for a software engineering role. Most of my recent work comes from the aquarium trade,
            which I know well because aquascaping is my hobby.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PROFILE.cv}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-fg px-4 py-2.5 text-[15px] font-medium text-bg transition-opacity hover:opacity-90"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-[15px] font-medium transition-colors hover:border-muted/50"
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>
          </div>
        </section>

        <section id="work" aria-labelledby="work-heading" className="pt-14 sm:pt-20">
          <SectionHeading id="work-heading">Selected work</SectionHeading>
          <div className="divide-y divide-line">
            {PROJECTS.map((project, i) => (
              <ProjectEntry key={project.id} project={project} number={i + 1} />
            ))}
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-heading" className="border-t border-line py-16 sm:py-20">
          <SectionHeading id="experience-heading">Experience</SectionHeading>
          <ul className="space-y-10">
            {EXPERIENCE.map((job) => (
              <li key={job.company} className="grid gap-2 md:grid-cols-12 md:gap-8">
                <p className="text-sm text-muted md:col-span-4">{job.period}</p>
                <div className="md:col-span-8">
                  <h3 className="text-[17px] font-semibold">
                    {job.role}, {job.company}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted">{job.location}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{job.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="about" aria-labelledby="about-heading" className="border-t border-line py-16 sm:py-20">
          <SectionHeading id="about-heading">About</SectionHeading>
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h3 className="text-sm text-muted">Education</h3>
              <ul className="mt-2 space-y-6">
                {EDUCATION.map((e) => (
                  <li key={e.award}>
                    <p className="text-[15px] font-semibold">{e.award}</p>
                    <p className="mt-0.5 text-[15px] text-muted">{e.school}</p>
                    <p className="mt-0.5 text-sm text-muted">{e.period}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-8">
              <p className="text-[15px] leading-relaxed">
                I&apos;m a software engineer based in {PROFILE.location}. I studied software engineering at APU,
                first for a diploma and then for a dual degree with De Montfort University. I mostly build web
                systems backed by relational databases.
              </p>
              <dl className="mt-8 divide-y divide-line border-y border-line">
                {SKILLS.map((s) => (
                  <div key={s.group} className="grid grid-cols-3 gap-4 py-3 text-[15px]">
                    <dt className="text-muted">{s.group}</dt>
                    <dd className="col-span-2">{s.items}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="hobbies" aria-labelledby="hobbies-heading" className="border-t border-line py-16 sm:py-20">
          <SectionHeading id="hobbies-heading">Hobbies</SectionHeading>
          <ShotSlider shots={AQUASCAPING_SHOTS} title="Aquascaping" aspect="aspect-[2/1] sm:aspect-[4/1]" />
          <div className="mt-10 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <h3 className="text-xl font-semibold tracking-tight">Aquascaping</h3>
              <p className="mt-1 text-[15px] text-muted">Planted aquarium layouts</p>
            </div>
            <div className="md:col-span-8">
              <p className="text-[15px] leading-relaxed">
                I design and build planted aquarium layouts and enter them in contests. It&apos;s also where the
                ideas for LWICMS and AkuaVerse came from. Away from the tank, I play football and go karting.
              </p>
              <dl className="mt-8 divide-y divide-line border-y border-line">
                {AQUASCAPING_RESULTS.map((r) => (
                  <div key={r.contest} className="grid grid-cols-3 gap-4 py-3 text-[15px]">
                    <dt className="text-muted">{r.contest}</dt>
                    <dd className="col-span-2">{r.result}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="border-t border-line py-16 sm:py-20">
          <SectionHeading id="contact-heading">Contact</SectionHeading>
          <div className="grid gap-6 md:grid-cols-12 md:gap-8">
            <p className="text-[15px] leading-relaxed text-muted md:col-span-4">
              Open to software engineering roles. Email is the quickest way to reach me.
            </p>
            <ul className="divide-y divide-line border-y border-line md:col-span-8">
              <ContactRow label="Email" href={`mailto:${PROFILE.email}`} value={PROFILE.email} />
              <ContactRow label="CV" href={PROFILE.cv} value="Download PDF" download />
              <ContactRow label="LinkedIn" href={PROFILE.linkedin} value="shawn-varughese" external />
              <ContactRow label="GitHub" href={PROFILE.github} value="yougottricked" external />
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted">© 2026 {PROFILE.name}</div>
      </footer>
    </>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mb-10 text-2xl font-semibold tracking-tight sm:text-[28px]">
      {children}
    </h2>
  );
}

function ProjectEntry({ project, number }: { project: Project; number: number }) {
  return (
    <article id={project.id} aria-labelledby={`${project.id}-title`} className="py-12 first:pt-0 sm:py-16">
      <ShotSlider shots={project.shots} title={project.title} priority={number === 1} />

      <div className="mt-10 grid gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-sm text-muted">
            <span className="tabular-nums">0{number}</span> · {project.title}
          </p>
          <h3 id={`${project.id}-title`} className="mt-2 text-xl font-semibold tracking-tight">
            {project.summary}
          </h3>
          <dl className="mt-6 space-y-3 text-sm">
            <Meta label="Type" value={project.context} />
            <Meta label="Year" value={project.year} />
            <Meta label="Role" value={project.role} />
          </dl>
          {project.links && (
            <ul className="mt-6 space-y-2 text-sm">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 font-medium underline-offset-4 decoration-accent decoration-2 hover:underline"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="md:col-span-8">
          <p className="text-[15px] leading-relaxed">{project.description}</p>
          <h4 className="mt-8 text-sm font-semibold">What I built</h4>
          <ul className="mt-3 space-y-3">
            {project.built.map((point) => (
              <li key={point} className="relative pl-5 text-[15px] leading-relaxed text-muted">
                <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-2.5 bg-muted" />
                {point}
              </li>
            ))}
          </ul>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tech stack">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-line px-2.5 py-1 text-sm text-muted transition-colors duration-200 hover:border-muted/50 hover:text-fg"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[4rem_1fr] gap-2">
      <dt className="text-muted">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function ContactRow({
  label,
  href,
  value,
  external,
  download,
}: {
  label: string;
  href: string;
  value: string;
  external?: boolean;
  download?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: true } : {})}
        className="group grid grid-cols-3 items-center gap-4 py-3 text-[15px]"
      >
        <span className="text-muted">{label}</span>
        <span className="col-span-2 flex items-center justify-between gap-3 break-all">
          <span className="underline-offset-4 decoration-accent decoration-2 group-hover:underline">{value}</span>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </a>
    </li>
  );
}
