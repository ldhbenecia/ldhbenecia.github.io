---
version: alpha
name: ldhbenecia portfolio
description: Personal portfolio of a backend engineer, built as an interactive single page with dark and light themes.
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
  button-hover: "#ffffff"
  window: "#16181d"
  window-edge: "rgba(255, 255, 255, 0.09)"
  chrome-close: "#ff5f57"
  chrome-min: "#febc2e"
  chrome-max: "#28c840"
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
  button-hover:
    backgroundColor: "{colors.button-hover}"
  window-frame:
    backgroundColor: "{colors.window}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink}"
  link-hover:
    textColor: "{colors.accent}"
---

## Overview

A one-page portfolio for a backend engineer who works across backend, infrastructure and observability. The default theme is dark (black with deep navy surfaces) with a matching light theme; the type is quiet and technical, and the energy comes from interaction rather than colour: an infrastructure topology that reacts to the cursor, a query replay that runs in real time, and screenshot previews that follow the pointer. Body content is Korean; interface labels (navigation, buttons, status) are English.

## Colors

- **Background (`bg`)** holds the whole page. There are no light fields; sections are separated by space or by one step into `surface` / `surface-2`.
- **Ink (`ink`)** is used for all running text. **Muted (`muted`)** is only for secondary notes, labels, before-values and inactive navigation.
- **Accent (`accent`)** is a low-saturation steel blue reserved for links on hover, after-values in measurements, the current navigation item, and interactive feedback. It never fills a section.
- **Line (`line`)** draws topology edges, list separators and the scrolled navigation edge only.

## Themes

Dark is the default; the light theme follows the system setting until the visitor picks one, and the choice is remembered. Token names stay the same; only values change. Window and chrome colours are the same in both themes.

| Token | Light value |
| --- | --- |
| bg | #f5f6f8 |
| surface | #eaedf2 |
| surface-2 | #dfe4ec |
| line | #d0d7e2 |
| ink | #0b1220 |
| muted | #536072 |
| accent | #2c5aa6 |
| accent-strong | #1f4682 |
| accent-ink | #ffffff |
| button-hover | #1f4682 |

- Switching themes reveals the new theme as a circle growing from the toggle button; without View Transition support colours fade, and under reduced motion the switch is instant.
- Every colour the topology canvas draws comes from theme tokens and is re-read when the theme changes.

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
- Project screenshots sit on the `window` colour in both themes, so a macOS window always reads as an object on the page. Unframed screenshots get a `window-edge` outline and traffic-light dots in `chrome-close`, `chrome-min` and `chrome-max`.

## Shapes

- Buttons are fully round pills.
- Product screenshots are always shown as macOS windows: images that already contain a window frame are used as transparent PNGs; unframed screenshots receive a matching window chrome with a traffic-light bar.

## Components

- **Button**: solid `ink` pill with `bg` text; hover changes to `button-hover`, press scales down slightly.
- **Ghost button**: transparent with a `line` inset outline; hover fills with `surface-2`.
- **Topology hero**: nodes and edges mirror the real cluster and projects; nodes drift, repel from the cursor, highlight their neighbours on hover, and request pulses travel along edges. It stops drawing off-screen or in a hidden tab and renders a single still frame under reduced motion.
- **Project index**: large project names in rows; hovering a row dims the others and shows that project's screenshot following the cursor (pointer devices only).
- **Navigation**: wordmark, section links with an accent underline on the current section, and the theme toggle. Below tablet width the links move into a full-screen menu sheet whose links rise in sequence.
- **Theme toggle**: a moon that morphs into a sun; it is the origin of the theme-switch reveal.
- **Experience cases**: title, problem and result are always visible; the detailed steps sit in an expandable section.
- **Contact**: profile links at normal reading size with an arrow that nudges on hover; no oversized display type.
- **Query replay**: two large figures with progress bars run the before and after timings in real time when the section enters the viewport, with a replay button.

## Do's and Don'ts

- Do give every animation a reduced-motion state and keep content visible without JavaScript.
- Do animate only transform, opacity and clip-path.
- Don't put small labels, pill badges or icons above headings.
- Don't set contact links or the footer in oversized display type.
- Don't add a send-mail action; contact goes through the profile links.
- Don't use icon-topped feature cards or rows of identical cards.
- Don't use gradients, except the scrim under the hero copy.
- Don't publish screenshots that expose personal data.
- Don't state a number that has no source in the resume, a repository README or a measurement record.
