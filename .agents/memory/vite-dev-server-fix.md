---
name: Vite dev server fix for this Replit portfolio
description: How the Vite dev server was fixed after process.exit(1) race condition and wrong config spreading
---

## The Problem
- `process.exit(1)` on any Vite error + browser connecting before dep optimization completes = server crash loop
- `viteConfig` is `defineConfig(async () => {...})` which returns an async function — spreading it with `...viteConfig` gives nothing, so Vite used wrong root (`cwd` not `client/`)
- Router had `base="/portfolio"` which broke dev (URL is `/` in dev)

## The Fix
1. **server/vite.ts**: Explicitly set `root`, `base:"/"`, `plugins`, `resolve.alias` in createViteServer. No process.exit(1).
2. **vite.config.ts**: `base: isDev ? "/" : "/portfolio/"`. Use `import.meta.dirname` not `__dirname`.
3. **App.tsx**: `WouterRouter base={import.meta.env.PROD ? "/portfolio" : "/"}`.

**Why:** defineConfig(async fn) returns the function itself, not the config object. Never spread viteConfig — always await it or set options explicitly.
