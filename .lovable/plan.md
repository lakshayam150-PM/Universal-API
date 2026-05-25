# Universal API Case Study — Interactive Slideshow

Build a polished, interview-ready slideshow web app presenting the Universal API project at S&P Global. 10 slides, keyboard + click navigation, smooth transitions, professional blue/gray/white palette.

## Stack
- Scaffold a `web_app` artifact (TanStack Start + Tailwind, default template).
- Framer Motion for slide transitions.
- Single-page app — all slides rendered as components, one visible at a time.

## Navigation & UX
- Prev / Next buttons (bottom corners).
- Slide indicator dots (bottom center) — clickable to jump.
- Keyboard: ←/→ arrows, Space (next), Home/End.
- Slide counter (e.g. "3 / 10") top right.
- Smooth fade + subtle slide transition between slides.
- Progress bar along top edge.

## Visual System
- Palette: deep navy (#0F2A47), royal blue (#2563EB), slate grays, white background; accent cyan for highlights.
- Typography: Inter (body) + tighter tracked headings.
- Each slide: title, kicker label ("01 / Problem"), content area, consistent footer with project name.
- Subtle grid/dot background texture on title and CTA slides.

## Slide-by-slide

1. **Title** — "Universal API", subtitle "Consolidating 5 Products into One Real-Time API", role + company badge, S&P Global mark. Animated gradient backdrop.
2. **Problem** — 4 pain-point cards in 2×2 grid, each with icon (multiple subs, fragmented integrations, polling overhead, no unified view).
3. **Solution** — Centered diagram: 5 source systems → Universal API → unified JSON; bullet list of solution principles beside it.
4. **My Role (PM)** — 5 numbered responsibility cards in a vertical timeline.
5. **Polling vs Event-Driven** — Side-by-side comparison: left card (polling, cron, hourly, complex) vs right card (webhooks, real-time, simple). Animated arrows.
6. **Event Flow (RFA walkthrough)** — Horizontal flow diagram: RFA status change → S&P system → webhook → client endpoint → client app updates. Step labels with timing annotations (sub-second).
7. **Payload Structure** — Stylized JSON code block with syntax highlighting showing OAID primary key + drillable product sections (onboarding, rfa, kyc, outreach, etc.). Side annotations pointing to key fields.
8. **Business Outcomes** — Large stat tiles: "50+ clients", "5 → 1 APIs", "Hourly → sub-second", "−40% support tickets", "2 weeks early". Client logos row (JPMorgan, HSBC, HDFC, Deutsche Bank as text chips).
9. **Key Learnings** — 4 insight cards with short PM takeaways.
10. **CTA** — "Ready for your questions" hero with contact-style framing; subtle animation.

## Files
- `src/routes/index.tsx` — presentation shell with navigation state.
- `src/components/slides/Slide01Title.tsx` … `Slide10CTA.tsx` — one file per slide.
- `src/components/SlideShell.tsx` — shared layout (kicker, title, footer, slide number).
- `src/components/Nav.tsx` — prev/next, dots, progress bar, counter.
- `src/lib/useKeyboardNav.ts` — keyboard hook.
- Tailwind tokens extended in `tailwind.config` / index.css for the palette.

## Technical notes
- Slides defined as an ordered array of components; current index in URL hash (`#/3`) so reload preserves position.
- Framer Motion `AnimatePresence` with mode="wait" for transitions.
- Fully responsive; designed primarily for 16:9 desktop but graceful on tablet.
- No backend — pure frontend.

Ready to build on approval.