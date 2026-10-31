import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteLayout } from "@/components/site-layout";
import heroImg from "@/assets/hero-office-devices.jpg";
import stepGoToImg from "@/assets/step-go-to-setup.jpg";
import stepSignInImg from "@/assets/step-sign-in.jpg";
import stepKeyCardImg from "@/assets/step-product-key.jpg";
import stepEnterKeyImg from "@/assets/step-enter-key.jpg";
import stepDownloadImg from "@/assets/step-download-install.jpg";
import stepActivateImg from "@/assets/step-activate.jpg";
import stepMobileImg from "@/assets/step-mobile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "office.com/setup — Install, Sign In & Activate Microsoft Office (Guide)" },
      {
        name: "description",
        content:
          "Step-by-step office.com/setup guide with pictures: sign in, enter your product key, download and install Office on Windows, Mac, and mobile, then activate it.",
      },
      { property: "og:title", content: "office.com/setup — Install & Activate Microsoft Office" },
      {
        property: "og:description",
        content:
          "Picture guide to office.com/setup: sign in, enter your product key, install Office on Windows, Mac, and mobile, and activate it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type StepImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

function StepFigure({ img }: { img: StepImage }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <img
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        loading="lazy"
        className="h-auto w-full"
      />
    </figure>
  );
}

function Step({
  n,
  title,
  children,
  img,
}: {
  n: number;
  title: string;
  children: ReactNode;
  img?: StepImage;
}) {
  return (
    <div className="grid gap-5 rounded-xl border border-border bg-card p-6 shadow-sm sm:grid-cols-[minmax(0,1fr)_minmax(0,300px)] sm:items-center">
      <div>
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            {n}
          </span>
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{children}</p>
      </div>
      {img ? <StepFigure img={img} /> : null}
    </div>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{children}</h2>
  );
}

function Index() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_120%_at_50%_0%,oklch(0.95_0.05_250)_0%,transparent_60%)] dark:bg-[radial-gradient(60%_120%_at_50%_0%,oklch(0.28_0.06_250)_0%,transparent_60%)]"></div>
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:py-20 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
              Independent guide · not affiliated with Microsoft
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              What is <span className="text-primary">office.com/setup</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              office.com/setup is the page where Microsoft Office users easily install, set up, and
              activate Office on a Windows or Mac system. Microsoft now also offers the same page
              at microsoft365.com/setup — both addresses are official. Enter your product key,
              download the setup, and follow the steps below — with a picture for every step.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="https://microsoft365.com/setup"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 sm:w-auto"
              >
                Get started
              </a>
              <a
                href="#windows-steps"
                className="inline-flex w-full items-center justify-center rounded-md border border-border bg-background px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent sm:w-auto"
              >
                See the steps
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              No sign-up · no downloads hosted here · setup happens on official microsoft.com pages
            </p>
          </div>
          <img
            src={heroImg}
            alt="A 2-in-1 laptop and tablet showing Office apps like Word, Excel, and Outlook"
            width={1792}
            height={1024}
            className="mx-auto w-full max-w-xl rounded-2xl border border-border bg-background shadow-lg"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-6">
          {[
            {
              label: "Sign in",
              icon: (
                <>
                  <circle cx="12" cy="8" r="4" />
                  <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" />
                </>
              ),
            },
            {
              label: "Enter key",
              icon: (
                <>
                  <circle cx="7.5" cy="15.5" r="3.5" />
                  <path d="M10 13 19 4m-3 0 3 3" />
                </>
              ),
            },
            {
              label: "Install",
              icon: <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />,
            },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3">
              <span className="grid h-16 w-16 place-items-center rounded-full border-2 border-muted-foreground/50 text-muted-foreground">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {item.icon}
                </svg>
              </span>
              <span className="text-sm font-semibold">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <SectionTitle>Setup at office.com/setup</SectionTitle>
          <p className="mt-3 text-muted-foreground">
            The whole process in seven steps. Each step is explained with pictures below.
          </p>
          <ol className="prose-step mt-6 grid list-decimal gap-2.5 rounded-xl border border-border bg-card p-6 pl-10 text-left text-[15px] shadow-sm sm:grid-cols-2">
            <li>Go to office.com/setup (also microsoft365.com/setup) for Office setup.</li>
            <li>Sign in or create a new Microsoft account.</li>
            <li>Find your Office product key.</li>
            <li>Enter the Microsoft Office product key.</li>
            <li>Select your country and language.</li>
            <li>Download Office setup and follow the on-screen instructions.</li>
            <li>Finish the installation and run the applications.</li>
          </ol>
        </div>
      </section>

      <section id="windows-steps" className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16">
          <SectionTitle>How to install Office on Windows</SectionTitle>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Follow these six steps at office.com/setup. Every step links to the official Microsoft
            page where the action happens.
          </p>
          <div className="mt-8 space-y-5">
            <Step
              n={1}
              title="Go to office.com/setup"
              img={{
                src: stepGoToImg,
                alt: "Browser open at office.com/setup showing the Office setup page",
                width: 1024,
                height: 768,
              }}
            >
              Open your browser, visit{" "}
              <a
                href="https://microsoft365.com/setup"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                office.com/setup
              </a>{" "}
              and select the Office product you want to install. The same page is also available at
              microsoft365.com/setup.
            </Step>
            <Step
              n={2}
              title="Sign in to your Microsoft account"
              img={{
                src: stepSignInImg,
                alt: "Microsoft account sign-in screen with an email field and Next button",
                width: 1024,
                height: 768,
              }}
            >
              Sign in with the email and password for the account tied to your Office purchase. If
              you do not have a Microsoft account yet, create one — your product key attaches to it.
            </Step>
            <Step
              n={3}
              title="Find your Office product key"
              img={{
                src: stepKeyCardImg,
                alt: "Retail product key card with a 25-character code",
                width: 1024,
                height: 768,
              }}
            >
              The key is 25 characters, grouped in five blocks. You find it printed on the retail
              card, inside the box, or in the confirmation email if you bought Office online.
            </Step>
            <Step
              n={4}
              title="Enter your Microsoft Office product key"
              img={{
                src: stepEnterKeyImg,
                alt: "Enter your product key page with country and language selectors",
                width: 1024,
                height: 768,
              }}
            >
              Once signed in, type the 25-character code in the product key area, then select your
              country and the language you want.
            </Step>
            <Step
              n={5}
              title="Download and install Office"
              img={{
                src: stepDownloadImg,
                alt: "Download page with an Install button and a progress bar",
                width: 1024,
                height: 768,
              }}
            >
              Select <strong>Install Office</strong> and let the installer download. Run it and
              follow the on-screen directions to install your registered copy of Microsoft Office.
            </Step>
            <Step
              n={6}
              title="Run the activation wizard"
              img={{
                src: stepActivateImg,
                alt: "Word first-run screen with a Get started activation button",
                width: 1024,
                height: 768,
              }}
            >
              When the install finishes, open any app such as Word. Follow the prompts on screen
              and sign in once — the setup goes through activation automatically.
            </Step>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight">Install Office on a Mac</h2>
            <ol className="prose-step mt-4 list-decimal space-y-2.5 pl-5 text-[15px]">
              <li>
                Go to{" "}
                <a
                  href="https://microsoft365.com/setup"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  office.com/setup
                </a>{" "}
                (also microsoft365.com/setup), sign in with your subscription, and select{" "}
                <strong>Install Office</strong>.
              </li>
              <li>
                Open Downloads and double-click the installer package (
                <code className="rounded bg-muted px-1 py-0.5">Office installer.dmg</code>).
              </li>
              <li>
                When the first Office screen appears, select <strong>Continue</strong> and sign in
                with your Office subscription.
              </li>
              <li>
                Choose how you wish to install the setup, then <strong>Continue</strong> and follow
                the prompts.
              </li>
              <li>Open Word from Launchpad and sign in to activate.</li>
            </ol>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight">Uninstall Office</h2>
            <div className="mt-4 grid gap-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Windows
                </h3>
                <ol className="prose-step mt-2 list-decimal space-y-1.5 pl-5 text-[15px]">
                  <li>Open the Control Panel and go to Programs.</li>
                  <li>Select Uninstall a program and find Office in the list.</li>
                  <li>Choose Uninstall and wait for it to finish.</li>
                  <li>Restart the computer when asked.</li>
                </ol>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Mac
                </h3>
                <ol className="prose-step mt-2 list-decimal space-y-1.5 pl-5 text-[15px]">
                  <li>Open your Applications folder and find the Office folder.</li>
                  <li>Double-click the Office uninstaller tool.</li>
                  <li>
                    Tick the Office apps to remove and select <strong>Uninstall</strong>.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
          <div>
            <SectionTitle>Office setup on Android, iPhone &amp; iPad</SectionTitle>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold">Android</h3>
                <ul className="prose-step mt-3 space-y-2 text-[15px]">
                  <li>Activate your subscription at office.com/setup or microsoft365.com/setup first.</li>
                  <li>Open the Google Play store.</li>
                  <li>Search for Microsoft 365 or Word.</li>
                  <li>Tap Install, then Open.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">iPhone &amp; iPad</h3>
                <ul className="prose-step mt-3 space-y-2 text-[15px]">
                  <li>Activate your subscription at office.com/setup or microsoft365.com/setup first.</li>
                  <li>Open the App Store.</li>
                  <li>Search for Microsoft Word and tap Get.</li>
                  <li>Open the app and log in with your email and password.</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Sign in with the account on your subscription to unlock full editing. Microsoft 365
              subscribers can install on up to five devices per person.
            </p>
          </div>
          <StepFigure
            img={{
              src: stepMobileImg,
              alt: "Phone showing an app store install screen next to a tablet with a document",
              width: 1024,
              height: 768,
            }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <SectionTitle>Quick answers</SectionTitle>
        <dl className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <dt className="font-semibold">Where do I enter my Office product key?</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
              At office.com/setup — the same page is also microsoft365.com/setup — while signed in
              to the Microsoft account you want the licence on. Enter the full 25-character code,
              hyphens included. Remember the account — you reinstall from it later without the key.
            </dd>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <dt className="font-semibold">How do I reinstall Microsoft Office?</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Sign in at account.microsoft.com/services, open Services &amp; subscriptions, and
              select <strong>Install Office</strong>. No key needed — the licence lives on your
              account.
            </dd>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <dt className="font-semibold">Microsoft 365 or Office 2021?</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Microsoft 365 is a subscription that always has the latest apps and can be shared
              with up to six people. Office 2021 is a one-time purchase for one PC or Mac and
              cannot be upgraded — you buy the next release at full price.
            </dd>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <dt className="font-semibold">Renew or turn off recurring billing</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Renew at{" "}
              <a
                href="https://www.microsoft.com/en-us/microsoft-365/buy/microsoft-365-family?ms.officeurl=renew&rtc=1"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                office.com/renew
              </a>
              . To stop auto-renewal, open Services &amp; subscriptions, choose{" "}
              <strong>Manage</strong>, then <strong>Turn off recurring billing</strong>.
            </dd>
          </div>
        </dl>
      </section>
    </SiteLayout>
  );
}
