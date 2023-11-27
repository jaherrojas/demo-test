import { test, expect } from '@playwright/test';

test.use({ storageState: ""})
test('test', async ({ page }) => {
  await page.goto('https://qa.silin.com.co/recaudo');
  
  await page.getByRole('link', { name: 'Formulario Aplicación' }).click();
  });
