import { test, expect } from '@playwright/test';

test('take screenshot', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.screenshot({ path: 'screenshot.png' });
});
