import { test, expect } from '@playwright/test';

async function waitFor(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

test('test', async ({ page }) => {
  await page.goto('https://qa.silin.com.co/login');
  await page.getByPlaceholder('Ej: ejemplo@dominio.com').click();
  await page.getByPlaceholder('Ej: ejemplo@dominio.com').fill('super.usuario');
  await page.getByPlaceholder('Ej: ejemplo@dominio.com').press('Alt+6');
  await page.getByPlaceholder('Ej: ejemplo@dominio.com').press('Alt+4');
  await page.getByPlaceholder('Ej: ejemplo@dominio.com').fill('super.usuario@jikkosoft.com');
  await page.getByPlaceholder('Ej: ejemplo@dominio.com').press('Tab');
  await page.getByPlaceholder('Ingrese su contraseña').fill('superjikko2023');
  await page.getByRole('button', { name: 'Ingresar' }).click();
  await waitFor(5000);
});