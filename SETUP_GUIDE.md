# React + TypeScript + Tailwind + shadcn Setup Guide

## Current Project Status
- Current project type: static HTML/CSS (no React build system yet)
- Current style path: `css/index.css`
- Current component path: none

## Why create `components/ui`
Creating `components/ui` is important because:
1. It keeps reusable UI primitives in one predictable place.
2. It matches shadcn conventions and makes generated components easier to manage.
3. It improves import consistency (for example: `@/components/ui/footer-1`).
4. It avoids mixing reusable UI with page-level feature code.

If your project uses `src`, use `src/components/ui`.
If your project does not use `src`, use `components/ui`.

## Recommended Fresh Setup (Vite + React + TypeScript)
Run these commands in CMD:

```cmd
npm create vite@latest tourism-react -- --template react-ts
cd tourism-react
npm install
```

## Install Tailwind CSS
```cmd
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update `tailwind.config.ts` content paths:

```ts
content: [
  "./index.html",
  "./src/**/*.{ts,tsx}",
]
```

Add Tailwind directives to `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Initialize shadcn/ui
```cmd
npx shadcn@latest init
```

During prompts, choose:
- TypeScript: Yes
- Tailwind CSS: Yes
- Components path: `src/components`
- Utils path: `src/lib/utils.ts`
- Alias: `@/*`

Then create the UI folder and move/add the footer:
- `src/components/ui/footer-1.tsx`

## Install Footer Dependency
The footer component uses Lucide icons:

```cmd
npm install lucide-react
```

## Component Analysis
- State/hooks: none required
- Context providers: none required
- Required assets: one Unsplash ocean image URL is already used in the component
- Responsive behavior: handled with Tailwind responsive classes (`md:*`, `sm:*`)
- Suggested placement: global layout footer (for example in `App.tsx` or main page layout)

## Questions To Confirm Before Production Use
1. What final URLs should replace the placeholder personal links?
2. Do you want the footer on all pages or only the home page?
3. Should project links scroll to page sections or route to separate pages?
4. Do you want a downloadable resume link in the personal links area?
