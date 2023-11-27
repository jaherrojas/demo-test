import { test } from "@playwright/test"

test("Administracion", async ({ browser }) => {
    const context = await browser.newContext({
        storageState: "./authEntidadQa.json"
    })
    const page= await context.newPage();
    await page.goto("https://qa.silin.com.co/login");
    await page.waitForTimeout(5000);
    await page.getByText("administración").first().click();

})
