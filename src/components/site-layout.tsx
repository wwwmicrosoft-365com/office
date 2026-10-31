
import type { ReactNode } from "react";

const HOME_URL = "/office/";
const BLOG_URL = "/office/blog/";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a
            className="flex items-center gap-2.5"
            href={HOME_URL}
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 5.5 11 4.2v7.3H4V5.5Zm8-1.5 8-1.4v9.4h-8V4ZM4 12.5h7v7.3L4 18.5v-6Zm8 0h8V22l-8-1.4V12.5Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="text-[15px] font-semibold tracking-tight">
              Office Nex<span className="text-muted-foreground"> Gen</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            <a
              href={HOME_URL}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Setup Guide
            </a>
            <a
              href={BLOG_URL}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Blog
            </a>
          </nav>

          <a
            href="https://account.microsoft.com/services"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Official account
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-20 border-t border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M4 5.5 11 4.2v7.3H4V5.5Zm8-1.5 8-1.4v9.4h-8V4ZM4 12.5h7v7.3L4 18.5v-6Zm8 0h8V22l-8-1.4V12.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="font-semibold tracking-tight">Office Nex Gen</span>
              </div>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                A free, independent resource with plain-English guides for installing, signing in,
                and activating Microsoft 365 and Office. We link you to the official Microsoft pages
                so you always handle your account and downloads where they belong.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Guides</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    href={HOME_URL}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Setup Guide
                  </a>
                </li>
                <li>
                  <a
                    href={BLOG_URL}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Blog &amp; Updates
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Official resources</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    href="https://account.microsoft.com/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Microsoft account
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.microsoft.com/microsoft-365"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Microsoft 365
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.microsoft.com/software-download"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Software download
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Microsoft Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-lg border border-border bg-background/60 p-4 text-xs leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">Disclaimer:</strong> Office Nex Gen
            is an independent, unofficial help website. We are not affiliated with, endorsed by, or
            sponsored by Microsoft. &quot;Microsoft 365&quot;, &quot;Office&quot;,
            &quot;Windows&quot; and related marks are trademarks of Microsoft Corporation. All
            product key redemption, downloads, and sign-in happen on official microsoft.com pages
            that we link to — we never ask for your password or process payments.
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            © 2026 Office Nex Gen. Independent educational resource.
          </p>
        </div>
      </footer>
    </div>
  );
}
