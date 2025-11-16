import "./index.css";
import App from "./App.svelte";
import { mount } from "svelte";

const app = mount(App, {
  target: document.body,
  props: { name: "world" } as unknown as Record<string, unknown>,
});

export default app;
