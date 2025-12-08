# Rsbuild Svelte TypeScript Code Review Standards

## Purpose

Code review guidelines for Svelte 5 + TypeScript + Rsbuild + Tailwind CSS 4 project.

## Mandatory always use

Always use context7 when I need code generation, setup or configuration steps, or
library/API documentation. This means you should automatically use the Context7 MCP
tools to resolve library id and get library docs without me having to explicitly ask.
- For svelte use always conte

## Code Philosophy

- **Brevity over verbosity** — keep code efficient and concise
- **Readability first** — code should be self-documenting
- **Minimal comments** — only above functions, not inline explanations
- **Scalability** — design for growth and maintainability

## Coding Standards

- Avoid type castings
- Imports must be always sorted alphabetically, also the import order
- Object destructuring prefer destructuring for objects and arrays
- Object properties must be sorted alphabetically
- Use semicolons at the end of each statement
- Use double quotes for strings
- Use arrow functions

## Svelte 5 Runes

- Use `$state()` for reactive variables, not legacy reactive declarations
- Use `$derived()` for computed values, not `$:` syntax
- Use `$effect()` for side effects, not `$:` reactive statements
- Use `$props()` for component props with TypeScript types

## Component Structure

- First the html then the script
- Keep components under 200 lines
- Use `.svelte` files with `<script lang="ts">` for TypeScript
- Extract reusable logic into separate `.ts` files
- Use functional composition over inheritance

## TypeScript Standards

- Always use `<script lang="ts">` in Svelte components
- Define explicit prop types using `$props<T>()`
- Avoid `any` — use `unknown` or specific types
- Use type inference where obvious, explicit types for props/exports

## Tailwind CSS 4

- Use utility classes directly in markup
- Avoid `@apply` unless creating reusable components
- Use CSS variables for theme customization via `@theme`
- Leverage dynamic values: `w-[137px]`, `bg-[#1da1f2]`

## State Management

- Use `$state()` for local component state
- Use `$derived()` for computed values — it's memoized
- For shared state, create `.svelte.ts` files with exported `$state`
- Avoid unnecessary reactivity — read state directly when not reactive

## Testing Requirements

- Write unit tests for business logic using Vitest
- Use `vitest-browser-svelte` for component tests
- Test file naming: `ComponentName.svelte.test.ts` or `utils.test.ts`
- Cover edge cases and error conditions

## Performance

- Avoid expensive computations in `$derived()` — memoize separately if needed
- Use `$effect` sparingly — prefer `$derived` when possible
- Lazy load components with dynamic imports
- Keep bundle size minimal — check dependencies

## Code Quality

- Run `pnpm format` before committing (Prettier)
- Run `pnpm lint` and fix ESLint issues
- Run `pnpm svelte-check` for TypeScript errors
- Functions should be focused (under 50 lines)
- Use descriptive variable names

## Security

- Never commit hardcoded secrets or API keys
- Validate and sanitize user inputs
- Use environment variables for sensitive config
- Check for XSS vulnerabilities in dynamic content

## Naming Conventions

- Components: `PascalCase.svelte`
- Files/folders: `kebab-case`
- Variables/functions: `camelCase`
- Constants: `UPPER_CASE`
- TypeScript types: `PascalCase`

## Documentation

- Add JSDoc comments for exported functions and complex logic
- Document prop interfaces with descriptions
- Keep README updated with setup instructions
