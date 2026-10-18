---
version: alpha
name: ldhbenecia portfolio
description: Personal portfolio of a backend engineer moving into SRE and DevOps, built as a dark, interactive single page.
omitted:
  - section: spacing
    reason: "Margins and section gaps are fluid clamp() values that the Dimension type cannot express"
  - section: rounded
    reason: "No shared radius token; buttons are fully round and window frames are local to project screenshots"
colors:
  bg: "#050608"
  surface: "#0b1220"
  surface-2: "#101a2e"
  line: "#1c2840"
  ink: "#e6e9ee"
  muted: "#8a93a3"
  accent: "#7b9fd4"
  accent-strong: "#9bb8e6"
  accent-ink: "#050608"
  field: "#0b1220"
  field-ink: "#e6e9ee"
  field-muted: "#9aa4b6"
  tag-infra: "#7b9fd4"
  tag-infra-ink: "#050608"
  tag-backend: "#24406f"
  tag-backend-ink: "#ffffff"
  tag-product: "#c3cbd8"
  tag-product-ink: "#050608"
  tag-study: "#1a2438"
  tag-study-ink: "#e6e9ee"
typography:
  display:
    fontFamily: Geist, Pretendard Variable
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.025em
  text:
    fontFamily: Geist, Pretendard Variable
    fontWeight: 400
    lineHeight: 1.6
components:
  button:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink}"
  link-hover:
    textColor: "{colors.accent}"
---

## Overview

A one-page portfolio for a backend engineer who is moving into SRE and DevOps. The page is dark (black with deep navy surfaces), the type is quiet and technical, and the energy comes from interaction rather than colour: an infrastructure topology that reacts to the cursor, a query replay that runs in real time, and screenshot previews that follow the pointer. Content is Korean first; Latin text and figures carry the technical tone.

## Colors

- **Background (`bg`)** holds the whole page. There are no light fields; sections are separated by space or by one step into `surface` / `surface-2`.
- **Ink (`ink`)** is used for all running text. **Muted (`muted`)** is only for secondary notes, labels, before-values and inactive navigation.
- **Accent (`accent`)** is a low-saturation steel blue reserved for links on hover, after-values in measurements, the current navigation item, and interactive feedback. It never fills a section.
- **Line (`line`)** draws topology edges, list separators and the scrolled navigation edge only.
- **Field (`field`)** is the footer ground, a navy one step above `bg`, with `field-ink` and `field-muted` on it.
- The four `tag-*` pairs colour repository spines by discipline (infra, backend, product, study); each background is always paired with its own `-ink`.

## Typography

- Geist renders Latin text and figures; Hangul falls through to Pretendard Variable in the same stack, so one `font-family` serves both scripts.
- Display and headings use weight 600–700 with negative tracking that tightens as size grows. Weight 900 and all-caps display settings are not used.
- Headings stay within two lines at every viewport width.
- Measurements, years and counters use tabular figures.

## Layout

- One centred content column with fluid side margins; large vertical gaps between sections, clearly larger than any gap inside a section.
- Neighbouring project chapters never share a composition (wide image, image pair, image beside text, pipeline, text only).
- Content lives in data modules; sections only arrange it.

## Elevation & Depth

- Nothing at rest carries a shadow except product screenshots shown as macOS windows.
- The navigation gains an opaque `bg` ground and a `line` edge once the hero has scrolled away.

## Shapes

- Buttons are fully round pills.
- Product screenshots are always shown as macOS windows: images that already contain a window frame are used as transparent PNGs; unframed screenshots receive a matching window chrome with a traffic-light bar.

## Components

- **Button**: solid `ink` pill with `bg` text; hover brightens to white, press scales down slightly.
- **Ghost button**: transparent with a `line` inset outline; hover fills with `surface-2`.
- **Topology hero**: nodes and edges mirror the real cluster and projects; nodes drift, repel from the cursor, highlight their neighbours on hover, and request pulses travel along edges. It stops drawing off-screen or in a hidden tab and renders a single still frame under reduced motion.
- **Project index**: large project names in rows; hovering a row dims the others and shows that project's screenshot following the cursor (pointer devices only).
- **Query replay**: two large figures with progress bars run the before and after timings in real time when the section enters the viewport, with a replay button.

## Do's and Don'ts

- Do give every animation a reduced-motion state and keep content visible without JavaScript.
- Do animate only transform, opacity and clip-path.
- Don't put small labels, pill badges or icons above headings.
- Don't use icon-topped feature cards or rows of identical cards.
- Don't use gradients, except the scrim under the hero copy.
- Don't publish screenshots that expose personal data.
- Don't state a number that has no source in the resume, a repository README or a measurement record.
