/// <reference types="svelte" />
/// <reference types="@rsbuild/core/types" />

declare module "*.svelte" {
  import { SvelteComponentTyped } from "svelte";

  // See https://svelte.dev/docs#sveltecomponenttyped
  export default class SvelteComponent<
    Props extends Record<string, unknown> = Record<string, unknown>,
    Events extends Record<string, unknown> = Record<string, unknown>,
    Slots extends Record<string, unknown> = Record<string, unknown>,
  > extends SvelteComponentTyped<Props, Events, Slots> {}
}
