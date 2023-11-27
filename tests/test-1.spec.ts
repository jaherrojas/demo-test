import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rodrigovillanueva.com.mx/');
  
  await page.getByRole('link', { name: 'Formulario Aplicación' }).click();
  });
});