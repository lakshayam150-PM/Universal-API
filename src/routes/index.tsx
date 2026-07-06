import { createFileRoute } from "@tanstack/react-router";
import { Fragment, useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Layers,
  GitBranch,
  Clock,
  Database,
  Webhook,
  Boxes,
  Target,
  Workflow,
  Code2,
  TrendingUp,
  Lightbulb,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

// ──────────────────────────────────────────────────────────────
// Shared chrome
// ──────────────────────────────────────────────────────────────

function Kicker({ index, label }: { index: number; label: string }) {
  return (
    <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300/90">
      <span className="text-sky-400/60">
        {String(index).padStart(2, "0")}
      </span>
      <span className="h-px w-8 bg-sky-400/40" />
      <span>{label}</span>
    </div>
  );
}

function SlideShell({
  index,
  kicker,
  title,
  children,
  variant = "default",
}: {
  index: number;
  kicker?: string;
  title?: React.ReactNode;
  children: React.ReactNode;
  variant?: "default" | "dark" | "title";
}) {
  const isDark = variant !== "default";
  return (
    <div
      className={
        "relative h-full w-full overflow-hidden " +
        (isDark
          ? "bg-[#0B1E36] text-white"
          : "bg-gradient-to-br from-slate-50 via-white to-sky-50 text-slate-900")
      }
    >
      {isDark && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      )}
      {!isDark && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,42,71,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,42,71,0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      )}

      <div className="relative z-10 flex h-full w-full flex-col px-12 py-10 md:px-20 md:py-14">
        {kicker && <Kicker index={index} label={kicker} />}
        {title && (
          <h2
            className={
              "mt-5 max-w-5xl font-semibold tracking-tight " +
              (isDark ? "text-white" : "text-[#0B1E36]") +
              " text-3xl md:text-5xl leading-[1.05]"
            }
          >
            {title}
          </h2>
        )}
        <div className="mt-8 flex-1 min-h-0">{children}</div>

        <div
          className={
            "mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] " +
            (isDark ? "text-white/40" : "text-slate-400")
          }
        >
          <span>Universal API · S&P Global</span>
          <span>Case Study · PM</span>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// Slides
// ──────────────────────────────────────────────────────────────

function Slide01() {
  return (
    <SlideShell index={1} variant="title">
      <div className="absolute inset-0 -z-0">
        <div className="absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-[520px] w-[520px] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>
      <div className="relative flex h-full flex-col justify-center">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-sky-200 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" /> Product Case Study
        </div>
        <h1 className="mt-8 text-6xl font-semibold leading-[1.02] tracking-tight md:text-8xl">
          Universal API
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-white/70 md:text-2xl">
          Consolidating five enterprise products into one real-time API —
          replacing polling, fragmentation, and complexity with a single
          event-driven payload.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80">
            Product Manager
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80">
            S&P Global
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80">
            50+ Enterprise Clients
          </span>
        </div>
      </div>
    </SlideShell>
  );
}

function PainCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-[#0B1E36]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
    </div>
  );
}

function Slide02() {
  return (
    <SlideShell
      index={2}
      kicker="Problem"
      title={
        <>
          Clients were drowning in <span className="text-sky-600">fragmented</span> integrations.
        </>
      }
    >
      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <PainCard
          icon={Layers}
          title="Multiple subscriptions"
          body="Clients had to purchase Onboarding Accelerator, RFA, KYC, and Outreach separately — five products, five contracts."
        />
        <PainCard
          icon={GitBranch}
          title="Five API integrations"
          body="Each product shipped its own feed, schema, and credentials. Engineering teams maintained five parallel pipelines."
        />
        <PainCard
          icon={Clock}
          title="Polling overhead"
          body="Cron jobs and batch pulls ran around the clock just to detect changes — adding latency, cost, and brittle scheduling logic."
        />
        <PainCard
          icon={Database}
          title="No unified view"
          body="Data lived across five underlying systems with no shared key. Reconciliation was manual and reporting lagged behind."
        />
      </div>
    </SlideShell>
  );
}

function Slide03() {
  const sources = ["Onboarding", "RFA", "KYC", "Outreach", "ISDA Documents"];
  return (
    <SlideShell
      index={3}
      kicker="Solution"
      title={
        <>
          One API. One payload. <span className="text-sky-600">Real-time.</span>
        </>
      }
    >
      <div className="flex h-full flex-col gap-8">
        {/* Horizontal flow: sources → hub → payload */}
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            End-to-end flow
          </div>
          <div className="mt-4 flex flex-col items-stretch gap-3 md:flex-row md:items-center">
            {/* Sources column */}
            <div className="flex flex-col gap-2 md:flex-1">
              {sources.map((s) => (
                <div
                  key={s}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-center text-xs font-medium text-slate-700 shadow-sm"
                >
                  {s}
                </div>
              ))}
            </div>

            <div className="hidden md:block text-2xl text-sky-400">→</div>

            {/* Hub */}
            <div className="rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 px-5 py-5 text-center text-white shadow-xl md:flex-1">
              <div className="text-[10px] uppercase tracking-[0.22em] text-white/70">
                Universal API
              </div>
              <div className="mt-1 text-base font-semibold">Single endpoint</div>
            </div>

            <div className="hidden md:block text-2xl text-sky-400">→</div>

            {/* Payload */}
            <div className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-center font-mono text-xs text-emerald-300 shadow-sm md:flex-1">
              {"{ unified JSON payload }"}
            </div>
          </div>
        </div>

        {/* Principles below */}
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Design principles
          </div>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-700 md:grid-cols-2">
            {[
              "Extracts only business-critical fields per source",
              "Sections linked by a primary key (OAID / RFAID)",
              "Modular — each product independently drillable",
              "Event-driven webhooks replace polling",
              "Backward compatible with legacy polling API",
            ].map((t) => (
              <li key={t} className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SlideShell>
  );
}

function Slide04() {
  const items = [
    {
      t: "Discovery & field selection",
      d: "Identified business-critical fields across all 5 systems using product metrics and client consumption data.",
    },
    {
      t: "Schema design",
      d: "Designed the unified JSON schema — modular, drillable product sections linked by a primary key.",
    },
    {
      t: "Architecture shift",
      d: "Architected the move from polling to event-driven webhooks for real-time delivery.",
    },
    {
      t: "Cross-functional alignment",
      d: "Led alignment across 5 product teams, 3 bank stakeholders, and engineering.",
    },
    {
      t: "Phased rollout",
      d: "Managed delivery: design (2 mo) → build (2 mo) → UAT (1 mo) → launch in Month 6.",
    },
  ];
  return (
    <SlideShell index={4} kicker="My Role" title="What I owned as PM.">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {items.map((it, i) => (
          <div
            key={it.t}
            className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#0B1E36] text-sm font-semibold text-white">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div>
              <h3 className="text-base font-semibold text-[#0B1E36]">{it.t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {it.d}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}

function ArchNode({
  label,
  sub,
  accent,
}: {
  label: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex min-w-[110px] flex-1 flex-col items-center rounded-xl border px-3 py-3 text-center shadow-sm ${
        accent
          ? "border-sky-300 bg-gradient-to-br from-sky-50 to-white ring-1 ring-sky-100"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="text-xs font-semibold text-[#0B1E36]">{label}</div>
      {sub && <div className="mt-1 text-[10px] text-slate-500">{sub}</div>}
    </div>
  );
}

function Slide05() {
  const nodes = [
    { label: "5 Source Systems", sub: "Post-trade, corp actions, real-time" },
    { label: "AWS EventBridge", sub: "Central event router + rules", accent: true },
    { label: "SQS Queue", sub: "Decouples ingestion & processing" },
    { label: "Event Processor", sub: "Normalises into single payload", accent: true },
    { label: "Notification Processor", sub: "Pushes to client webhooks" },
    { label: "Client Webhook", sub: "Frontend renders real-time data", accent: true },
  ];
  const benefits = [
    "SQS decouples ingestion — resilient under load spikes",
    "EventBridge rules replace point-to-point connections",
    "Single consolidated payload — no client-side stitching",
    "Webhook push replaces polling — sub-second latency",
    "Dead Letter Queue captures & retries failed notifications",
    "Idempotency keys prevent duplicate renders",
  ];
  return (
    <SlideShell
      index={5}
      kicker="Architecture"
      title={
        <>
          Event-driven pipeline on <span className="text-sky-600">AWS.</span>
        </>
      }
    >
      <div className="flex h-full flex-col gap-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
            {nodes.map((n, i) => (
              <React.Fragment key={n.label}>
                <ArchNode label={n.label} sub={n.sub} accent={n.accent} />
                {i < nodes.length - 1 && (
                  <div className="hidden text-sky-400 md:block">→</div>
                )}
              </React.Fragment>
            ))}

          </div>
          <p className="mt-4 text-xs leading-relaxed text-slate-600">
            Five upstream systems publish events to <span className="font-semibold text-[#0B1E36]">EventBridge</span>,
            which routes them into an <span className="font-semibold text-[#0B1E36]">SQS Queue</span>.
            An <span className="font-semibold text-[#0B1E36]">Event Processor</span> consolidates data into a single
            normalised payload; the <span className="font-semibold text-[#0B1E36]">Notification Processor</span> pushes it
            to each client's registered webhook endpoint for real-time rendering.
          </p>
        </div>

        <div className="rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-5 ring-1 ring-sky-100">
          <div className="flex items-center gap-2 text-sky-600">
            <Webhook className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-widest">
              Architectural benefits
            </span>
          </div>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-xs text-slate-700 md:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-500" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SlideShell>
  );
}


function FlowStep({
  n,
  title,
  sub,
}: {
  n: number;
  title: string;
  sub: string;
}) {
  return (
    <div className="flex flex-1 flex-col items-center text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-sm font-semibold text-white shadow-md">
        {n}
      </div>
      <div className="mt-3 text-sm font-semibold text-[#0B1E36]">{title}</div>
      <div className="mt-1 max-w-[180px] text-xs text-slate-500">{sub}</div>
    </div>
  );
}

function Slide06() {
  const steps = [
    { t: "RFA status changes", s: "Analyst updates RFA in source system" },
    { t: "S&P system detects", s: "Change captured & enriched" },
    { t: "Universal API fires", s: "Webhook dispatched in <1s" },
    { t: "Client endpoint receives", s: "Unified JSON payload" },
    { t: "Client app updates", s: "Dashboards refresh in real time" },
  ];
  return (
    <SlideShell
      index={6}
      kicker="Event Flow"
      title="An RFA status change, end to end."
    >
      <div className="flex h-full flex-col justify-center">
        <div className="relative">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-sky-200 via-indigo-300 to-sky-200 md:block" />
          <div className="relative flex flex-col gap-8 md:flex-row md:gap-2">
            {steps.map((s, i) => (
              <FlowStep key={s.t} n={i + 1} title={s.t} sub={s.s} />
            ))}
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-sky-200 bg-sky-50/60 px-5 py-4 text-center text-sm text-[#0B1E36]">
          <span className="font-semibold">End-to-end latency:</span>{" "}
          <span className="text-sky-700">sub-second</span> — versus the legacy
          hourly polling cycle.
        </div>
      </div>
    </SlideShell>
  );
}

function Slide07() {
  const code = `{
  "OAID": "OA-7782913",
  "client": "JPMorgan",
  "updated_at": "2024-08-12T14:32:08Z",
  "onboarding": {
    "status": "in_review",
    "stage": "documentation",
    "owner": "ops_team_3"
  },
  "rfa": {
    "RFAID": "RFA-4421",
    "status": "approved",
    "risk_score": 12
  },
  "kyc": {
    "status": "verified",
    "expiry": "2026-08-01"
  },
  "outreach": {
    "last_contact": "2024-08-10",
    "channel": "email"
  }
}`;
  return (
    <SlideShell
      index={7}
      kicker="Payload"
      title={
        <>
          One JSON. Every product. <span className="text-sky-600">Drillable.</span>
        </>
      }
    >
      <div className="grid h-full grid-cols-1 gap-6 md:grid-cols-5">
        <div className="md:col-span-3">
          <pre className="h-full overflow-auto rounded-2xl border border-slate-800 bg-[#0B1E36] p-6 font-mono text-[13px] leading-relaxed text-slate-100 shadow-xl">
            <code>
              {code.split("\n").map((line, i) => (
                <div key={i} className="whitespace-pre">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: line
                        .replace(
                          /"([A-Za-z_]+)":/g,
                          '<span style="color:#7dd3fc">"$1"</span>:',
                        )
                        .replace(
                          /: "(.*?)"/g,
                          ': <span style="color:#86efac">"$1"</span>',
                        )
                        .replace(
                          /: (\d+)/g,
                          ': <span style="color:#fcd34d">$1</span>',
                        ),
                    }}
                  />
                </div>
              ))}
            </code>
          </pre>
        </div>
        <div className="space-y-4 md:col-span-2">
          {[
            {
              t: "Primary key",
              d: "OAID links every product section together for unified lookup.",
            },
            {
              t: "Modular sections",
              d: "Each product (onboarding, rfa, kyc, outreach) is independently drillable.",
            },
            {
              t: "Only what matters",
              d: "Just the business-critical fields — no schema bloat.",
            },
            {
              t: "Stable contract",
              d: "Versioned and backward-compatible with the legacy API.",
            },
          ].map((it) => (
            <div
              key={it.t}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="text-sm font-semibold text-[#0B1E36]">{it.t}</div>
              <div className="mt-1 text-sm text-slate-600">{it.d}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

function Stat({
  big,
  label,
}: {
  big: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
        {big}
      </div>
      <div className="mt-2 text-sm text-white/60">{label}</div>
    </div>
  );
}

function Slide08() {
  return (
    <SlideShell
      index={8}
      kicker="Outcomes"
      title={<span className="text-white">The numbers that mattered.</span>}
      variant="dark"
    >
      <div className="flex h-full flex-col justify-between gap-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <Stat big="50+" label="Enterprise clients onboarded" />
          <Stat big="5 → 1" label="APIs to integrate" />
          <Stat big="Sub-second" label="Latency, down from hourly" />
          <Stat big="−40%" label="Client support tickets" />
          <Stat big="2 weeks" label="Delivered ahead of schedule" />
          <Stat big="6 months" label="Design → launch" />
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">
          <span className="uppercase tracking-[0.2em]">Adopted by</span>
          {["JPMorgan", "HSBC", "HDFC", "Deutsche Bank", "+ 46 more"].map(
            (c) => (
              <span
                key={c}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80"
              >
                {c}
              </span>
            ),
          )}
        </div>
      </div>
    </SlideShell>
  );
}

function Slide09() {
  const items = [
    {
      icon: Target,
      t: "Discovery beats assumption",
      d: "Deep discovery uncovers what clients truly need — not what they say they need.",
    },
    {
      icon: Workflow,
      t: "Event-driven scales",
      d: "For real-time use cases, webhooks outperform polling on cost, latency, and reliability.",
    },
    {
      icon: Boxes,
      t: "Backward compatibility de-risks",
      d: "Phased rollout with a parallel legacy API gave clients zero-pressure migration.",
    },
    {
      icon: Code2,
      t: "Align before you design",
      d: "Cross-functional alignment up front prevented expensive rework later.",
    },
  ];
  return (
    <SlideShell index={9} kicker="Learnings" title="What I took away.">
      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        {items.map(({ icon: Icon, t, d }) => (
          <div
            key={t}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#0B1E36]">{t}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{d}</p>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}

function Slide10() {
  return (
    <SlideShell index={10} variant="dark">
      <div className="absolute inset-0 -z-0">
        <div className="absolute left-1/3 top-1/4 h-[420px] w-[420px] rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>
      <div className="relative flex h-full flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-sky-200">
          <Lightbulb className="h-3.5 w-3.5" /> Thank you
        </div>
        <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
          Ready for your <span className="text-sky-300">questions.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Happy to dive deeper into discovery, schema design, the polling→webhook
          shift, or the cross-functional rollout.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm text-white/70">
          <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
            ← / → to navigate
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
            Home · End
          </span>
        </div>
      </div>
    </SlideShell>
  );
}

// ──────────────────────────────────────────────────────────────
// Shell
// ──────────────────────────────────────────────────────────────

const slides = [
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  Slide06,
  Slide07,
  Slide08,
  Slide09,
  Slide10,
];

function readHashIndex(): number {
  if (typeof window === "undefined") return 0;
  const m = window.location.hash.match(/^#\/(\d+)$/);
  if (!m) return 0;
  const n = parseInt(m[1], 10) - 1;
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(slides.length - 1, n));
}

function Index() {
  const [i, setI] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    setI(readHashIndex());
    const onHash = () => setI(readHashIndex());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = useCallback((next: number) => {
    const clamped = Math.max(0, Math.min(slides.length - 1, next));
    setDirection(clamped > i ? 1 : -1);
    setI(clamped);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#/${clamped + 1}`);
    }
  }, [i]);

  const next = useCallback(() => go(i + 1), [go, i]);
  const prev = useCallback(() => go(i - 1), [go, i]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        go(0);
      } else if (e.key === "End") {
        go(slides.length - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, go]);

  const Current = slides[i];
  const progress = ((i + 1) / slides.length) * 100;

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-slate-100">
      {/* Progress bar */}
      <div className="absolute left-0 right-0 top-0 z-30 h-1 bg-slate-200">
        <motion.div
          className="h-full bg-gradient-to-r from-sky-500 to-indigo-600"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Counter */}
      <div className="absolute right-6 top-5 z-30 rounded-full bg-white/80 px-3 py-1 text-xs font-medium tabular-nums text-slate-700 shadow-sm backdrop-blur">
        {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      {/* Slide */}
      <div className="h-full w-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={i}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full"
          >
            <Current />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        disabled={i === 0}
        className="group absolute bottom-6 left-6 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm backdrop-blur transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        disabled={i === slides.length - 1}
        className="group absolute bottom-6 right-6 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm backdrop-blur transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 shadow-sm backdrop-blur">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => go(idx)}
            className={
              "h-1.5 rounded-full transition-all " +
              (idx === i
                ? "w-6 bg-[#0B1E36]"
                : "w-1.5 bg-slate-300 hover:bg-slate-400")
            }
          />
        ))}
      </div>
    </div>
  );
}

// keep TrendingUp import used to avoid lint noise even though unused visually
void TrendingUp;
