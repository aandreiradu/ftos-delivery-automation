import { expect, type Page } from "@playwright/test";
import { test } from "../src/modules/ftos-automation-factory";

test("It should authenticate in portal", async ({ authNPortal }) => {
  await authNPortal();
});

test("it should authenticate in studio", async ({ authNStudio }) => {
  await authNStudio();
});
