---
name: plan-first
description: Use ONLY when the user explicitly asks to plan first, e.g. types "lên kế hoạch", "lập plan", "viết plan trước", "làm plan mode", "plan this", "make a plan first", or "/plan". Do NOT trigger automatically on regular implement/build/fix/refactor requests — only when the user's own words explicitly ask for a plan.
---

## Objective
Force a plan-then-execute workflow. Never write or edit code before the plan is reviewed and approved.

## Steps

### 1. Context & Pattern Discovery
- Read relevant project files to understand existing architecture, design patterns, and dependencies.
- **UI/UX Detection**: Detect if the task involves user interfaces, frontend components, pages, design systems, styling, animations, or UX interactions.
- **UI/UX Intelligence Query (UI UX Pro Max Integration)**:
  If the task involves UI/UX or frontend:
  1. Run the local design system search engine to get concrete recommendations:
     ```bash
     python .agents/skills/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <keywords>" --design-system
     ```
  2. If a specific tech stack is detected or requested (e.g., `html-tailwind`, `react`, `nextjs`, `vue`, etc.):
     ```bash
     python .agents/skills/ui-ux-pro-max/scripts/search.py "<topic>" --stack <stack_name>
     ```
  3. For specialized UI aspects, consult domain queries or sibling skills:
     - Component tokens & CSS variables: `design-system` skill
     - UI styling & Tailwind utility rules: `ui-styling` skill
     - Motion & animations: `python .agents/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain motion`
     - Typography & font pairings: `python .agents/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain typography`
     - UX guidelines & accessibility: `python .agents/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain ux`

### 2. Write Implementation Plan Artifact
Write a structured Implementation Plan artifact. For all tasks, include:
- **Goal & Scope**: High-level objectives and boundaries.
- **Files to Create / Modify**: Filepaths with concrete reasoning.
- **Ordered Implementation Steps**: Clear, incremental steps.
- **Risks & Trade-offs**: Technical gotchas, edge cases, performance considerations.
- **Verification & Testing**: Step-by-step verification plan.

**If the task involves UI/UX, MANDATE the UI/UX Specification section in the plan:**
- **Layout & Structure**: Page pattern, key sections, conversion flow.
- **Design Style**: Primary aesthetic (e.g. Bento Grid, Swiss Minimalism, Glassmorphism), keywords, accessibility profile.
- **Color Palette & Semantic Tokens**:
  - Primary, Secondary, Accent/CTA, Background, Card/Surface, Foreground/Text, Muted, Border, Destructive, Ring (with hex codes and CSS custom property names).
- **Typography**: Headings font, body font, font weights, and Google Fonts import link.
- **Key Visual Effects**: Interaction timings (150–300ms transitions), hover states, micro-animations, elevation/shadows.
- **Anti-patterns to Avoid**: Industry-specific anti-patterns (e.g. AI-style purple gradients in finance, low contrast, cluttered widgets, emoji as icons).
- **Pre-Delivery UX & Accessibility Checklist**:
  - [ ] Contrast ratio >= 4.5:1 for normal text (WCAG AA)
  - [ ] Visible focus rings on keyboard navigation (`:focus-visible`)
  - [ ] Real SVG icons (Lucide / Heroicons), never emoji as icons
  - [ ] Interactive elements have `cursor-pointer`
  - [ ] Respect `prefers-reduced-motion`
  - [ ] Fully responsive layout across 375px, 768px, 1024px, 1440px

### 3. Stop Execution Gate
- **STOP immediately after presenting the plan.**
- Do NOT create or edit code files yet.

### 4. Review & Approval
- Ask the user to review the plan and reply "Approved" or provide feedback/adjustments.

### 5. Iteration
- If feedback or revisions are requested, update the Implementation Plan artifact and return to step 4.

### 6. Implementation
- Only after receiving explicit approval from the user, proceed to implement according to the plan.

## Rules of Engagement
- Never skip the planning step, even for tasks that seem trivial, unless the user explicitly commands "skip plan" or "fast mode".
- When new instructions arrive during planning or execution, update the plan before resuming work.
- Leverage `ui-ux-pro-max` search scripts and data directly from `.agents/skills/ui-ux-pro-max/` without needing network calls.
