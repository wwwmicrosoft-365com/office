import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Microsoft 365 Setup Blog — Recent News & Guide Updates" },
      {
        name: "description",
        content:
          "Recent Microsoft 365 setup news, activation changes, and updates to our install, sign-in, and product key guides — with links to official Microsoft pages.",
      },
      { property: "og:title", content: "Microsoft 365 Setup Blog & Updates" },
      {
        property: "og:description",
        content:
          "What changed recently in Microsoft 365 setup, downloads, and activation — plus a changelog of our guides.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

type Post = {
  date: string;
  label: string;
  tag: string;
  title: string;
  summary: string;
  points: string[];
  href: string;
  hrefLabel: string;
};

const posts: Post[] = [
  {
    date: "2026-09-08",
    label: "8 September 2026",
    tag: "Activation",
    title: "Sign-in loops after a password change: what to check first",
    summary:
      "If Word or Excel keeps asking you to sign in right after you change your Microsoft account password, the apps are usually holding an old cached credential rather than failing activation.",
    points: [
      "Sign out of every Office app, close them all, then sign back in once from Word.",
      "Remove the stale work or personal account entry under Windows Settings, then add it again.",
      "If the loop continues, run the Office repair tool (Online Repair) before reinstalling anything.",
    ],
    href: "/",
    hrefLabel: "Open the setup guide",
  },
  {
    date: "2026-08-27",
    label: "27 August 2026",
    tag: "Product keys",
    title: "Redeeming a 25-character key: the two pages people mix up",
    summary:
      "Retail cards point at one redemption page and boxed copies sometimes print another. Both are official, and both attach the key to the Microsoft account you are signed in with.",
    points: [
      "Check which account you are signed in with before entering the key — the key sticks to that account.",
      "A key that reports 'already used' is usually attached to a second, older account you own.",
      "Keys are redeemed once; after that you install from Services & subscriptions, not from the key again.",
    ],
    href: "/",
    hrefLabel: "Read the setup walkthrough",
  },
  {
    date: "2026-08-14",
    label: "14 August 2026",
    tag: "Download & install",
    title: "Installer stalls near the end: it is usually disk space or an old install",
    summary:
      "A download that finishes but then hangs while 'getting things ready' most often runs into a previous Office version or a nearly full system drive.",
    points: [
      "Free up several gigabytes on the system drive before starting the installer.",
      "Uninstall older standalone Office versions first so the new install does not collide with them.",
      "On Mac, install from the .pkg in your Downloads folder rather than from a browser prompt.",
    ],
    href: "/",
    hrefLabel: "Read the download & install steps",
  },
  {
    date: "2026-07-30",
    label: "30 July 2026",
    tag: "Subscriptions",
    title: "What actually happens to your files when a subscription lapses",
    summary:
      "The apps switch to read-only rather than deleting anything. Your documents stay where they are, and renewing restores full editing without a reinstall.",
    points: [
      "You keep opening, viewing, and printing files; editing and saving are paused.",
      "Cloud storage drops back to the free tier, so move large folders locally before it lapses.",
      "Renewing reactivates the same install — just sign in again and the licence returns.",
    ],
    href: "/",
    hrefLabel: "See the quick answers",
  },
];

const changelog = [
  {
    label: "September 2026",
    text: "Rewrote the activation troubleshooting steps in the order Microsoft's own support flow follows, and added the sign-in loop fix.",
  },
  {
    label: "August 2026",
    text: "Split the install steps by platform so Windows, Mac, and mobile each read straight through without cross-references.",
  },
  {
    label: "July 2026",
    text: "Added device-limit and licence-transfer answers to the FAQ, and refreshed every official Microsoft link.",
  },
];

function BlogPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_120%_at_50%_0%,oklch(0.95_0.05_250)_0%,transparent_60%)] dark:bg-[radial-gradient(60%_120%_at_50%_0%,oklch(0.28_0.06_250)_0%,transparent_60%)]"></div>
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
            Updated regularly · independent guide
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Recent info &amp; <span className="text-primary">updates</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Short, practical notes on the Microsoft 365 setup questions people hit most often, plus a
            record of what changed in our guides. Every fix links back to the official Microsoft page
            where the action happens.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="card-hover rounded-xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                  {post.tag}
                </span>
                <time dateTime={post.date} className="text-xs font-medium text-muted-foreground">
                  {post.label}
                </time>
              </div>
              <h2 className="mt-4 text-xl font-semibold tracking-tight">{post.title}</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{post.summary}</p>
              <ul className="mt-4 space-y-2.5">
                {post.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href={post.href}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                {post.hrefLabel} →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Guide changelog</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            We keep the walkthroughs in step with the official Microsoft pages. Here is what changed
            recently.
          </p>
          <dl className="mt-8 space-y-4">
            {changelog.map((entry) => (
              <div key={entry.label} className="rounded-xl border border-border bg-card p-5">
                <dt className="font-semibold">{entry.label}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {entry.text}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 rounded-lg border border-border bg-background/60 p-4 text-xs leading-relaxed text-muted-foreground">
            These notes are our own observations as an independent help site. For product
            announcements and official policy, always check{" "}
            <a
              href="https://support.microsoft.com/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Microsoft Support
            </a>
            .
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
