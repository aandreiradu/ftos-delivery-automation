import { test as FTOS } from "@playwright/test";
import { Page, chromium, Browser } from "playwright";

interface IFtosAutomationFactory {
  authNPortal(): Promise<void>;
  authNStudio(): Promise<void>;
  getElementById(id: string);
}

export const test = FTOS.extend<IFtosAutomationFactory>({
  authNPortal: async ({ page }): Promise<void> => {
    await page.goto(process.env.portalURL!);

    const usernameInput = await page.locator('input[id="usernameField"]');
    if (!usernameInput) {
      throw new Error("Unable to detect username input");
    }
    await usernameInput.fill(process.env.username!);

    const passwordInput = await page.locator('input[id="passwordField"]');
    if (!passwordInput) {
      throw new Error("Unable to detect password input");
    }
    await passwordInput.fill(process.env.password!);

    await page.locator('input[value="Login"]').first().click();
    await page.waitForLoadState("domcontentloaded");
    await page.close();
  },
  authNStudio: async ({ page }): Promise<void> => {
    await page.goto(process.env.studioURL!);

    const usernameInput = await page.locator('input[id="usernameField"]');
    if (!usernameInput) {
      throw new Error("Unable to detect username input");
    }
    await usernameInput.fill(process.env.username!);

    const passwordInput = await page.locator('input[id="passwordField"]');
    if (!passwordInput) {
      throw new Error("Unable to detect password input");
    }
    await passwordInput.fill(process.env.password!);

    await page.locator('input[value="Sign in"]').first().click();
    await page.waitForLoadState("domcontentloaded");
    await page.close();
  },
});
