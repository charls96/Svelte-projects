import { describe, expect, it } from "vitest";
import App from "./App.svelte";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";

describe("App.svelte", () => {
  it("should render h1", async () => {
    render(App);

    const heading = page.getByRole("heading", { level: 1 });
    await expect.element(heading).toBeInTheDocument();
  });
});
