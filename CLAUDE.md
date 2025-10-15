# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a D&D Assistant application built with Next.js 15.5.5 using the App Router, React 19, TypeScript, and Tailwind CSS v4. The project uses Turbopack for faster builds and development.

## Development Commands

### Development Server
```bash
npm run dev
```
Starts the development server with Turbopack at http://localhost:3000. Changes to files will be automatically reflected.

### Build
```bash
npm run build
```
Creates a production build using Turbopack.

### Production Server
```bash
npm start
```
Starts the production server (requires `npm run build` first).

### Linting
```bash
npm run lint
```
Runs ESLint with Next.js TypeScript rules.

## Project Structure

- **`app/`** - Next.js App Router directory containing routes, layouts, and pages
  - `layout.tsx` - Root layout with Geist font configuration
  - `page.tsx` - Home page component
  - `globals.css` - Global styles including Tailwind directives
- **`public/`** - Static assets (SVG icons)
- **`@/*`** - Path alias pointing to the project root (configured in tsconfig.json)

## Technical Configuration

### Next.js
- Uses App Router (not Pages Router)
- Turbopack enabled for both dev and build
- Default configuration in `next.config.ts`

### TypeScript
- Strict mode enabled
- Path alias `@/*` maps to project root
- Target: ES2017

### Styling
- Tailwind CSS v4 (configured via PostCSS)
- Geist Sans and Geist Mono fonts from `next/font/google`
- Global styles in `app/globals.css`

### ESLint
- Extends `next/core-web-vitals` and `next/typescript`
- Ignores: node_modules, .next, out, build, next-env.d.ts

## Implementable features

### Navbar

- A horizontal navbar
- left end is an icon for the site
- right end are the navigation items
- navigation items are capable of dropping down on hover or touch
- navigation bar is sticking to the screen following the scrolling but taking real space at the top
- navigation bar is responsive as a floating (right side) hamburger menu on mobile
- naivagtion items should be coming from data/nav.ts